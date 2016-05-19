define(['angular'], function () {
    return ['$resource',
        function ($resource) {
            'use strict';

            var Note = $resource('/api/notes/:id', null, {
                update: {
                    method: 'PUT',
                    params: {
                        id: "@id"
                    }
                },
                get: {
                    isArray: true
                }
            });

            return Note;
        }];
});
