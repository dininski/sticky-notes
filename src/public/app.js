define('app',
    [
        'angular',
        'ui-router',
        'ng-resource',
        'modules/home/home',
        'modules/common/common',
        'modules/notes/notes',
        'ng-draggable'
    ],
    function (angular, uiRouter, ngResource, home, services, notes) {
        var app = angular.module('app', ['ui.router', 'home', 'ngResource', 'common', 'notes']);

        app.config(['$qProvider', function ($q) {
            $q.errorOnUnhandledRejections(false);
        }]);

        app.init = function () {
            angular.bootstrap(document, ['app']);
        };

        return app;
    });