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
        var movieEndpoint = 'https://clutter-front-end-interview.herokuapp.com/movies.json';
        var service = {
            getMovies: getMovies
        };
        return service;

        ////////////////

        function getMovies(searchString) {
            // TODO: Whenever this runs, cancel any pending requests
            if (!searchString) {
                // TODO: pull this a level up?
                // See https://stackoverflow.com/questions/20555472/can-you-resolve-an-angularjs-promise-before-you-return-it
                var deferred = $q.defer();
                deferred.resolve([]);
                return deferred.promise;
            } else {
                var resourceUri = movieEndpoint + '?q[title_cont]=' + searchString;
                // resourceUri = movieEndpoint + searchString; // to test errors
                return $http.get(resourceUri)
                    .then(function (res) {
                        return res.data;
                    }, function (err) {
                        // TODO: Is this what we want? Can we do something more informative?
                        return err;
                    })
            }

        }
    }

})();

