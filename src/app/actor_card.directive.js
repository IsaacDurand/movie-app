/**
 * Created by isaacdurand on 5/22/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('actorCard', actorCard);

    /* @ngInject */
    function actorCard() {
        var directive = {
            bindToController: true,
            controller: ActorCardController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                actor: '<'
            },
            template: '<p><span ng-bind="vm.actor.name"></span><br>as<br><span ng-bind="vm.actor.character"></span></p>'
        };
        return directive;
    }

    /* @ngInject */
    function ActorCardController() {
        var vm = this;
    }

})();
