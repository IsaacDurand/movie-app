/**
 * Created by isaacdurand on 5/18/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('movieListing', movieListing);

    movieListing.$inject = [];

    /* @ngInject */
    // TODO: remove any unneeded things
    function movieListing() {
        var directive = {
            bindToController: true,
            controller: MovieListingController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                movie: '<'
            },
            template: '<div class="movie-listing"><p ng-bind="vm.movie.title"></p>' +
            '<p>Released <span ng-bind="vm.movie.release_date | date: \'longDate\' "></span></p></div>'
        };
        return directive;
    }

    /* @ngInject */
    function MovieListingController() {
        var vm = this;
    }

})();
