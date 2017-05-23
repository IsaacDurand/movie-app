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
            template: '<div class="movie-listing"><img ng-attr-alt="Poster for {{vm.movie.title}}" ' +
            'ng-src="https://image.tmdb.org/t/p/w500/{{vm.movie.poster_path}}" height="375px" width="250px">' +
            '<p ng-bind="vm.movie.title"></p>' +
            '<p>Released <span ng-bind="vm.movie.release_date | date: \'longDate\' "></span></p></div>'
        };
        return directive;
    }

    /* @ngInject */
    function MovieListingController() {
        var vm = this;
    }

})();

