const express = require('express');
const app = express();
const httpConfig = require('./serverConfig').http;
const sessionConfig = httpConfig.session;
const logger = require('./logger');
const router = require('./router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const process = require('process');

app.use(bodyParser.json());
app.use(cookieParser());
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'pug');

app.use(expressSession({
    secret: sessionConfig.sessionSecret,
    resave: sessionConfig.resave,
    saveUninitialized: sessionConfig.saveUninitialized
}));
app.use(router);

app.listen(httpConfig.port, () => {
    logger.info('Service started on port ' + httpConfig.port);
});

process.on('SIGTERM', function () {
    server.close(function () {
        process.exit(0);
    });
});