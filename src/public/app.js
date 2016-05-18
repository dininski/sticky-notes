require(
    [
        'angular',
        'ui-router',
        'components/home/home'
    ],
    function (angular, uiRouter, home) {
        var app = angular.module('myApp', ['ui.router', 'home']);

        app.config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/');

                    $stateProvider
                        .state('base', {
                            url: '',
                            templateUrl: 'components/base/partials/base.html'
                        });
                }
            ]);

        app.init = function () {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });