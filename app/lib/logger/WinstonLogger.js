'use strict';

const BaseLogger = require('./BaseLogger');
const winston = require('winston');

class WinstonLogger extends BaseLogger {
    constructor(level) {
        super(level);
        if (level) {
            winston.level = level;
        }
    }

    info(msg) {
        winston.info(msg);
    }

    error(msg) {
        winston.error(msg);
    }
}

module.exports = WinstonLogger;