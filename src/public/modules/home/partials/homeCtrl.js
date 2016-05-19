define(['angular'], function (angular) {
    return ['$scope', '$state', 'User', function ($scope, $state, User) {
        function loginUser(user) {
            return User.login({username: user.username, password: user.password})
                .$promise
                .then(function () {
                    $state.transitionTo('notes');
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err));
                })
        }

        $scope.login = function (user) {
            return loginUser(user);
        };

        $scope.register = function (user) {
            var userData = {username: user.username, password: user.password};
            var newUser = new User(userData);
            newUser.$save()
                .then(function () {
                    return loginUser(userData);
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err));
                })
        };
    }];
});