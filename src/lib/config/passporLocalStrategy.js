const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// TODO: connect with data
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        done(null, {id: 1, name: 'gosho'});
    });

    passport.use('local', new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        done(null, {username: username, password: password});
    }));
};