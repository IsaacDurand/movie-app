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
                actor: '='
            },
            template: '<div><img ng-attr-alt="Photo of {{vm.actor.name}}" ng-if="vm.actor.profile_path" ' +
            'ng-src="https://image.tmdb.org/t/p/w500/{{vm.actor.profile_path}}" width="150px">' +
            '<p class="no-photo" ng-if="!vm.actor.profile_path">No photo available</p>' +
            '<p><span ng-bind="vm.actor.name"></span><br>as<br><span ng-bind="vm.actor.character"></span></p></div>'
        };
        return directive;
    }

    /* @ngInject */
    function ActorCardController() {
        var vm = this;
    }

})();

