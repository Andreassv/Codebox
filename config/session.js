const session = require('express-session');

module.exports = (app) => {
    app.use(session({
        'resave': false,
        'saveUninitialized': true,
        'secret': 'really secret stuff' 
    }));
};