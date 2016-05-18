const LocalStrategy = require('passport-local').Strategy;
const db = require('../database');
var User = require('../model/User');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        db.get()
            .then(()=> {
                return User.findOne({_id: id}, done);
            });
    });

    passport.use('local', new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        db.get()
            .then(() => {
                return User.findOne({username: username})
                    .then((user) => {
                        if (!user) {
                            return done(null, false, 'Incorrect username');
                        }

                        // TODO: password hashing
                        if (user.password !== password) {
                            return done(null, false, 'Incorrect password.');
                        }

                        return done(null, user);
                    })
            })
    }));
};