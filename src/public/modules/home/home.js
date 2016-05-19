define(
    [
        'angular',
        'ui-router',
        'modules/home/partials/homeCtrl'
    ],
    function (angular, uiRouter, homeCtrl) {
        var home = angular.module('home', ['ui.router']);

        home.config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: 'modules/home/partials/home.html',
                    controller: homeCtrl
                });
        }]);

        return home;
    });