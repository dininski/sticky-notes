define(['angular'], function () {
    return ['$resource',
        function ($resource) {
            'use strict';

            var User = $resource('/api/users', {}, {
                login: {
                    method: 'POST',
                    url: '/api/users/login'
                },
                me: {
                    method: 'GET',
                    url: '/api/users/me'
                },
                logout: {
                    method: 'GET',
                    url: '/api/users/logout'
                }
            });

            return User;
        }];
});
