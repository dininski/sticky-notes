define(
    [
        'angular',
        'ui-router',
        'modules/home/partials/homeCtrl'
    ],
    function (angular, uiRouter, homeCtrl) {
        var home = angular.module('home', ['ui.router']);

        home.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, urlRouterProvider) {
            urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'modules/home/partials/home.html',
                    controller: homeCtrl
                });
        }]);

        return home;
    });