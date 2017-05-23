/**
 * Created by isaacdurand on 5/18/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['searchService'];

    /* @ngInject */
    function MovieController(searchService) {
        var vm = this;
        vm.cast = [];
        vm.isListLoading = false;
        vm.movies = [];
        vm.searchString = '';
        vm.selectMovie = selectMovie;
        vm.selectedMovie = null;
        vm.shouldShowDetails = true;
        vm.title = 'MovieController';
        vm.toggleShowDetails = toggleShowDetails;
        vm.updateList = updateList;

        ////////////////

        function selectMovie(movie) {
            vm.selectedMovie = movie;
            vm.cast = [];
            searchService.getCast(vm.selectedMovie.id)
                .then(function (cast) {
                    vm.cast = cast;
                });
        }

        function toggleShowDetails() {
            vm.shouldShowDetails = !vm.shouldShowDetails;
        }

        function updateList() {
            vm.movies = [];
            vm.isListLoading = true;
            searchService.getMovies(vm.searchString)
                .then(function (movies) {
                    if (movies) {
                        vm.movies = movies;
                        vm.isListLoading = false;
                    }
                });
        }
    }

})();

