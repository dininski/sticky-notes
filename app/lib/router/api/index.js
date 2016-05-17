'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const restrictedRoute = require('../../middleware/restrictedRoute');
const usersRouter = require('./users');

router.use(usersRouter);
router.use(restrictedRoute);

module.exports = router;