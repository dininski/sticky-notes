'use strict';

const connect = require('camo').connect;
const dbConfig = require('../serverConfig').db;

let instance = null;

class Db {
    constructor() {
        if (!instance) {
            instance = this;
            this.connectionString = dbConfig.connectionString;
        }

        return instance;
    }

    static get() {
        var db = new Db();
        return connect(db.connectionString);
    }
}

module.exports = Db;