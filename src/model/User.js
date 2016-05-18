'use strict';

const Document = require('camo').Document;
const usersCollectionName = 'users';

class User extends Document {
    constructor() {
        super();
        this.schema({
            username: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });
    }

    static collectionName() {
        return usersCollectionName;
    }
}

module.exports = User;