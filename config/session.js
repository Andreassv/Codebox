const session = require('express-session');

module.exports = (app) => {
    app.use(session({
        'resave': false,
        'saveUnintialized': true,
        'secret': 'really sercet stuff' 
    }));
};