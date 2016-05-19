define(
    [
        'angular',
        'ui-router',
        'modules/notes/partials/notesCtrl',
        'modules/notes/directives/singleNote/singleNote'
    ],
    function (angular, uiRouter, homeCtrl, singleNoteDirective) {
        var notes = angular.module('notes', ['ui.router', 'ngDraggable']);

        notes.config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('notes', {
                    url: '/notes',
                    templateUrl: 'modules/notes/partials/notes.html',
                    controller: homeCtrl
                });
        }]);

        notes.directive('singleNote', singleNoteDirective);

        return notes;
    });