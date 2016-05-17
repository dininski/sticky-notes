'use strict';

module.exports = {
    notFound: {
        errorCode: 1000,
        message: 'Resource not found'
    },
    notAuthenticated: {
        errorCode: 1001,
        message: 'You need to be logged in to access this resource'
    },
    notAuthorized: {
        errorCode: 1002,
        message: 'You are not authorized to access this resource'
    }
};