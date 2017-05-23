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
        var castEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies/{ID}/cast_members.json';
        var movieEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies.json?q[title_cont]=';
        var service = {
            getCast: getCast,
            getMovies: getMovies
        };
        var canceler;

        return service;

        ////////////////

        // If the request is canceled, return a null value so that updateList will not update the list of movies.
        function errorHandler() {
            return null;
        }

        function getCast(movieId) {
            var resourceUri = castEndpoint.replace('{ID}', movieId);
            return $http.get(resourceUri)
                .then(successHandler)
        }

        function getMovies(searchString) {
            // Cancel any pending requests to this endpoint
            if (canceler) {
                canceler.resolve();
            }

            if (searchString) {

                // If there is a search string, initiate a new request and return the promise.
                canceler = $q.defer();
                var config = {
                    method: 'GET',
                    timeout: canceler.promise,
                    url: movieEndpoint + searchString
                };
                return $http(config)
                    .then(successHandler, errorHandler);
            } else {

                // If the search string is empty, immediately resolve return a promise that resolves to an empty array.
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

