define('home',
    [
        'angular',
        'ui-router',
        'components/home/partials/homeCtrl'
    ],
    function (angular, uiRouter, homeCtrl) {
        var home = angular.module('home', ['ui.router']);

        home.config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('base.home', {
                    url: '/home',
                    templateUrl: 'components/home/partials/home.html',
                    controller: homeCtrl
                });
        }]);

        return home;
    });