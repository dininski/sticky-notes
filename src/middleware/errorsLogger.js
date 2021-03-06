var logger = require('../logger');

module.exports = (err, req, res, next) => {
    logger.error(err.stack);
    next(err);
};