/**
 * Created by isaacdurand on 5/22/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .factory('searchService', searchService);

    searchService.$inject = ['$http', '$q'];

    /* @ngInject */
    function searchService($http, $q) {
        var castCanceler;
        var castEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies/{ID}/cast_members.json';
        var movieCanceler;
        var movieEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies.json?q[title_cont]=';
        var service = {
            getCast: getCast,
            getMovies: getMovies
        };

        return service;

        ////////////////

        // If the request is canceled, return a null value so that the controller will not update the movie or cast list.
        function errorHandler() {
            return null;
        }

        function getCast(movieId) {
            if (castCanceler) {
                castCanceler.resolve();
            }

            castCanceler = $q.defer();
            var config = {
                method: 'GET',
                timeout: castCanceler.promise,
                url: castEndpoint.replace('{ID}', movieId)
            };
            return $http(config)
                .then(successHandler, errorHandler);
        }

        function getMovies(searchString) {

            // Cancel any pending requests to this endpoint
            if (movieCanceler) {
                movieCanceler.resolve();
            }

            // If there is a search string, initiate a new request and return the promise.
            // Otherwise, immediately resolve and return a promise that resolves to an empty array.
            if (searchString) {
                movieCanceler = $q.defer();
                var config = {
                    method: 'GET',
                    timeout: movieCanceler.promise,
                    url: movieEndpoint + searchString
                };
                return $http(config)
                    .then(successHandler, errorHandler);
            } else {
                var deferred = $q.defer();
                deferred.resolve([]);
                return deferred.promise;
            }
        }

        function successHandler(res) {
            return res.data;
        }
    }

})();

