const express = require('express');
const router = express.Router({mergeParams: true});
const apiRouter = require('./api/index');
const notFound = require('../middleware/notFound');

router.use('/api', apiRouter);
router.use(express.static('public'));
router.use(notFound);

module.exports = router;