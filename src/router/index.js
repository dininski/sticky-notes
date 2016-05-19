const express = require('express');
const router = express.Router({mergeParams: true});
const apiRouter = require('./api/index');
const notFound = require('../middleware/notFound');
const errorsLogger = require('../middleware/errorsLogger');
const clientError = require('../middleware/clientError');
const errorsHandler = require('../middleware/errorHandler');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.use('/api', apiRouter);
router.use(express.static('public'));
router.use(notFound);
router.use(errorsLogger);
router.use(clientError);
router.use(errorsHandler);

module.exports = router;