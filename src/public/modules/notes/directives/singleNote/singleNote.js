define([], function () {
    return ['Note', function (Note) {
        function onNoteUpdate(note, updateExpression, newPosition) {
            Note.update({id: note._id}, updateExpression)
                .$promise
                .then(function () {
                    if (newPosition) {
                        note.position = newPosition;
                    }
                });
        }

        return {
            templateUrl: 'modules/notes/directives/singleNote/singleNote.html',
            scope: {
                note: '=',
                onDeleteClick: '='
            },
            link: function (scope, element, attrs) {
                scope.onDragComplete = function (obj, event) {
                    var newPosition = {xPos: event.x, yPos: event.y};
                    var updateExpression = {position: newPosition};
                    onNoteUpdate(scope.note, updateExpression, newPosition);
                };

                scope.onInputBlur = function () {
                    var note = scope.note;
                    onNoteUpdate(note, {text: note.text});
                };
            }
        }
    }]
});