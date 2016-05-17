'use strict';

const express = require('express');
const app = express();
const httpConfig = require('./serverConfig').http;
const logger = require('./lib/logger');
const router = require('./lib/router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');

app.use(bodyParser.json());
app.use(cookieParser());
require('./lib/config/passporLocalStrategy')(passport);
app.use(passport.initialize());
app.use(passport.session());

// TODO: extract secret to a separate config file and update the options
app.use(expressSession({secret: 'tralala', resave: false, saveUninitialized: false}));
app.use(router);

app.listen(httpConfig.port, () => {
    logger.info('Service started on port ' + httpConfig.port);
});