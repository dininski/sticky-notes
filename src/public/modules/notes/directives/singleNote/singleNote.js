define([], function () {
    return ['Note', function (Note) {
        function onNoteUpdate(note, updateExpression, newPosition) {
            Note.update({id: note._id}, updateExpression)
                .$promise
                .then(function () {
                    if (newPosition) {
                        note.position.xPos = newPosition.x;
                        note.position.yPos = newPosition.y;
                    }
                });
        }

        return {
            templateUrl: 'modules/notes/directives/singleNote/singleNote.html',
            scope: {
                note: '='
            },
            link: function (scope, element, attrs) {
                scope.onDragComplete = function (obj, event) {
                    var updateExpression = {position: {xPos: event.x, yPos: event.y}};
                    onNoteUpdate(scope.note, updateExpression, {x: event.x, y: event.y});
                };

                scope.onInputBlur = function () {
                    var note = scope.note;
                    onNoteUpdate(note, {text: note.text});
                }
            }
        }
    }]
});