/**
 * Created by isaacdurand on 5/18/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('movieListing', movieListing);

    movieListing.$inject = ['$http'];

    /* @ngInject */
    // TODO: remove any unneeded things
    function movieListing($http) {
        var directive = {
            bindToController: true,
            controller: MovieListingController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                movie: '='
            },
            template: '<p>{{ vm.movie.title }}</p>'
            // TODO: consider using inline template instead for performance
            // This URL would need to be absolute
            // templateUrl: './app/movie_listing.html'
        };
        return directive;

        function link(scope, element, attrs) {
            // TODO: remove this if I'm not using it
        }
    }

    MovieListingController.$inject = ['$http'];

    /* @ngInject */
    function MovieListingController($http) {
        // Do stuff
        var vm = this;
    }

})();

