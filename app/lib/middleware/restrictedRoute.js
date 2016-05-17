'use strict';

const notAuthorizedError = require('../common/errors').notAuthorized;

module.exports = (req, res, next) => {
    if (req.user) {
        return next();
    }

    res.status(401);
    res.json(notAuthorizedError);
    res.end();
};