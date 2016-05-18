const notFoundError = require('../common/errors').notFound;

module.exports = (req, res, next) => {
    res.status(404);
    res.json(notFoundError);
    res.end();
};