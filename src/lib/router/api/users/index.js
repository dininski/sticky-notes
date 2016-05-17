const express = require('express');
const restrictedRoute = require('../../../middleware/restrictedRoute');
const usersRouter = express.Router({mergeParams: true});
const passport = require('passport');
const notesRouter = require('./notes');

usersRouter.post('/login', passport.authenticate('local'));

// TODO: check if user already logged in
usersRouter.post('/login', (req, res, next) => {
    res.status(200);
    res.json({message: 'Success'});
});

usersRouter.use(restrictedRoute);

usersRouter.get('/:userId', (req, res, next) => {
    // TODO: get user profile information
    res.json('200', {});
});

usersRouter.post('/logout', (req, res, next) => {
    req.user.logout();
    res.end();
});

usersRouter.use(notesRouter);
module.exports = usersRouter;