/**
 * Created by isaacdurand on 5/18/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    // TODO: Remove any unused dependencies
    MovieController.$inject = ['$http'];

    /* @ngInject */
    function MovieController($http) {
        var vm = this;
        vm.title = 'MovieController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

