const notAuthorizedError = require('../common/errors').notAuthorized;

module.exports = (req, res, next) => {
    if (req.session.passport && req.session.passport.user) {
        return next();
    }

    res.status(401);
    res.json(notAuthorizedError);
    res.end();
};