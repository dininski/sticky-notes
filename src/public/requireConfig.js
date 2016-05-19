/*globals require*/

require.config({
    paths: {
        angular: 'assets/js/angular/angular',
        'ui-router': 'assets/js/angular-ui-router/release/angular-ui-router',
        'angular-route': 'assets/js/angular-route/angular-route',
        'ng-resource': 'assets/js/angular-resource/angular-resource',
        'ng-draggable': 'assets/js/ngDraggable/ngDraggable'
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
        },
        'ng-resource': {
            deps: ['angular']
        },
        'ng-draggable': {
            deps: ['angular']
        }
    },
    deps: ['./bootstrap']
});