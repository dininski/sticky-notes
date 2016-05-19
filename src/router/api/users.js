const express = require('express');
const restrictedRoute = require('../../middleware/restrictedRoute');
const usersRouter = express.Router({mergeParams: true});
const passport = require('passport');
const db = require('../../database');
const User = require('../../model/User');
var errors = require('../../common/errors');
const notAuthenticatedError = errors.notAuthenticated;

usersRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (info || err) {
            res.status(400);
            return res.json({errorCode: notAuthenticatedError.errorCode, message: info || err.message});
        }

        req.login(user, (err) => {
            if (err) {
                return res.status(400).json({errorCode: notAuthenticatedError.errorCode, message: err.message});
            }
            return res.json(user);
        })
    })(req, res, next);
});

usersRouter.post('/login', (req, res, next) => {
    res.json({message: 'Success'});
});

usersRouter.post('/', (req, res, next) => {
    var user = req.body;

    db.get()
        .then(() => {
            return User.create({username: user.username, password: user.password}).save();
        })
        .then((user) => {
            res.status(200).json(user);
        }, (err) => {
            res.status(400).json({errorCode: errors.databaseError.errorCode, message: err.message});
        })
});

usersRouter.use(restrictedRoute);

usersRouter.get('/logout', (req, res, next) => {
    req.session.destroy()
    res.json({message: 'Success'});
});

usersRouter.get('/me', (req, res, next) => {
    const userId = req.session.passport.user;
    User.findOne({_id: userId})
        .then((user)=> {
            if (!user) {
                return res.status(404).json(errors.notFound);
            }

            res.json(user);
        })
        .catch((err) => {
            res.status(400).json(errors.notFound);
        });
});

module.exports = usersRouter;