const config = {
    http: {
        port: 3000,
        session: {
            sessionSecret: 'rainbowUnicorn',
            resave: false,
            saveUninitialized: false
        }
    },
    db: {
        connectionString: 'nedb://test'
    }
};

module.exports = config;