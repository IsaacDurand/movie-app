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
        var movieEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies.json';
        var service = {
            getCast: getCast,
            getMovies: getMovies
        };
        return service;

        ////////////////

        function getCast(movieId) {
            var resourceUri = castEndpoint.replace('{ID}', movieId);
            return $http.get(resourceUri)
                .then(successHandler)
        }

        function getMovies(searchString) {
            // TODO: Whenever this runs, cancel any pending requests
            if (!searchString) {
                var deferred = $q.defer();
                deferred.resolve([]);
                return deferred.promise;
            } else {
                var resourceUri = movieEndpoint + '?q[title_cont]=' + searchString;
                return $http.get(resourceUri)
                    .then(successHandler)
            }
        }

        function successHandler(res) {
            return res.data;
        }
    }

})();

