const db = require("../../config/mysql")();
const bcrypt = require('bcryptjs');

module.exports = function (app) {
    app.get('/signup', (req, res, next) => {
        res.render('signup');
    });
    app.post('/signup', (req, res, next) => {
        let success = true;
        let errorMessage;
        if (!req.fields.username || !req.fields.username.lenght > 1) {
            success = false;
            errorMessage = 'Dit bugernavn må kun indeholde store og små bogstaver';
        }
        if (!req.fields.passphrase || !req.fields.passphrase.lenght > 3) {
            success = false;
            errorMessage = 'Dit kodeord skal være på minimum 4 tegn';
        }
        if (success) {
            let hashhedpassphrase = bcrypt.hashSync(req.fields.passphrase, 10);
            let message;
            db.query('INSERT INTO users SET username = ?, passphrase = ?, roles_id = (SELECT id from roles WHERE level = 10)', [req.fields.username, hashhedpassphrase],
                (error, result) => { 
                if (error) {
                    message = `noget gik galt: ${error}`;
                } else {
                    message = 'Tak for din tilmelding';
                }
                res.redirect('/login');
            });
        }
    });
}