/**
 * Created by isaacdurand on 5/18/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    // TODO: Remove any unused dependencies
    MovieController.$inject = ['searchService'];

    /* @ngInject */
    function MovieController(searchService) {
        var vm = this;
        vm.cast = [];
        vm.movies = [];
        vm.searchString = '';
        vm.selectMovie = selectMovie;
        vm.selectedMovie = null;
        vm.title = 'MovieController';
        vm.updateList = updateList;

        activate();

        ////////////////

        function activate() {
            console.log('MovieController activated!');
        }

        function selectMovie(movie) {
            vm.selectedMovie = movie;
            vm.cast = [];
            searchService.getCast(vm.selectedMovie.id)
                .then(function (cast) {
                    vm.cast = cast;
                })
        }

        function updateList() {
            searchService.getMovies(vm.searchString)
            // This function runs regardless of whether the HTTP request is successful
            .then(function (movies) {
                vm.movies = movies;
            });
        }
    }

})();

