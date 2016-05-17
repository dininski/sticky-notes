'use strict';

const express = require('express');
const app = express();
const httpConfig = require('./config/config').http;
const logger = require('./lib/logger');
const router = require('./lib/router');

app.use(router);

app.listen(httpConfig.port, () => {
    logger.info('Service started on port ' + httpConfig.port);
});