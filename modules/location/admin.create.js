const db = require("../../config/mysql")();

module.exports = function (app) {
    app.get('/admin/create', (req, res, next) => {
        res.render('admin/admin.create.ejs');
    });
    app.post('/create', (req, res, next) => {
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
            let message;
            db.query('INSERT INTO users SET username = ?, passphrase = ?, roles_id = (SELECT id from roles WHERE level = 10)', [req.fields.username, req.fields.passphrase],
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