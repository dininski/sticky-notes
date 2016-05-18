const express = require('express');
const router = express.Router({mergeParams: true});
const usersRouter = require('./users/index');

router.use('/users', usersRouter);

module.exports = router;