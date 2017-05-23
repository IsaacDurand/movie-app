/**
 * Created by isaacdurand on 5/22/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('actorCard', actorCard);

    actorCard.$inject = ['$http'];

    // TODO: Remove unused things
    /* @ngInject */
    function actorCard($http) {
        var directive = {
            bindToController: true,
            controller: ActorCardController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                actor: '='
            },
            template: '<div>' +
            '<img ng-if="vm.actor.profile_path" ng-src="https://image.tmdb.org/t/p/w500/{{vm.actor.profile_path}}"' +
            'ng-attr-alt="Photo of {{vm.actor.name}}" width="150px">' +
            '<p class="no-photo" ng-if="!vm.actor.profile_path">No photo available</p>' +
            '<p><span ng-bind="vm.actor.name"></span><br /> as <br /><span ng-bind="vm.actor.character"></span></p></div>'
        };
        return directive;

        function link(scope, element, attrs) {
            // TODO: remove if not needed
        }
    }

    ActorCardController.$inject = ['$http'];

    /* @ngInject */
    function ActorCardController($http) {
        var vm = this;
    }

})();

