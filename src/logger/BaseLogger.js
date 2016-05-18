'use strict';

class Logger {
    constructor(level) {
    }

    info(msg) {
        throw new Error('Info logging level not implemented!');
    }

    error(msg) {
        throw new Error('Error logging level not implemented!')
    }
}

module.exports = Logger;