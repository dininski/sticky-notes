/*globals require*/

require.config({
    paths: {
        angular: 'assets/js/angular/angular',
        'ui-router': 'assets/js/angular-ui-router/release/angular-ui-router',
        'angular-route': 'assets/js/angular-route/angular-route'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ui-router': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    deps: ['./bootstrap']
});