const express = require('express');
const router = express.Router({mergeParams: true});
const usersRouter = require('./users');
const notesRouter = require('./notes');

router.use('/users', usersRouter);
router.use('/notes', notesRouter);

module.exports = router;