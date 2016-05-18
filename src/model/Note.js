'use strict';

const Document = require('camo').Document;
const notesCollectionName = 'notes';
const User = require('./User');
const positionValidator = require('./validators/positionValidator');

class Note extends Document {
    constructor() {
        super();
        this.schema({
            text: {
                type: String,
                required: true
            },
            user: {
                type: User,
                required: true
            },
            position: {
                type: Object,
                validate: positionValidator
            }
        })
    }

    static collectionName() {
        return notesCollectionName;
    }
}

module.exports = Note;