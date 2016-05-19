define(['angular'], function (angular) {
    return ['$scope', '$state', 'Note', 'User', function ($scope, $state, Note, User) {
        Note.get()
            .$promise
            .then(function (notes) {
                $scope.notes = notes;
            })
            .catch(function (err) {
                console.log(JSON.stringify(err));
            });

        User.me()
            .$promise
            .then(function (user) {
                $scope.user = user;
            });

        $scope.addNote = function () {
            var newNote = {text: 'Enter text', position: {xPos: 100, yPos: 100}};
            var note = new Note(newNote);
            note.$save()
                .then(function (noteResponse) {
                    $scope.notes.push(noteResponse);
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err));
                });
        };

        $scope.onDropComplete = function (data, evt) {
            console.log("drop success, data:", data);
        };

        $scope.logout = function () {
            User.logout()
                .$promise
                .then(function () {
                    $state.transitionTo('home');
                });
        }
    }];
});