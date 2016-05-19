define(
    [
        'angular',
        'modules/common/services/User',
        'modules/common/services/Note'
    ],
    function (angular, users, notes) {
        var common = angular.module('common', []);
        common.service('User', users);
        common.service('Note', notes);
        return common;
    });