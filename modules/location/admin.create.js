const db = require("../../config/mysql")();

module.exports = function (app) {
    app.get('/admin/create-user', (req, res, next) => {
        db.query('SELECT id, list FROM tableformlists', (error, results) => {
        res.render('admin/admin.create.ejs', {results});
        })
    });
    app.post('/create-user', (req, res, next) => {
        if (!req.fields || !req.fields.username || !req.fields.passphrase)
            throw new Error('Bad request');
        
        // const hash = bcrypt.hashSync(req.fields.passphrase, 10);
    
        db.execute('INSERT INTO users SET username = ?, passphrase = ?, roles_id = (SELECT id from roles WHERE level = 10)',
            [req.fields.username], (err, rows) => {
                if (err) throw new Error(err);
                res.redirect(`/user/${rows.insertId}`);
        });
    });
    // app.post('/create-user', (req, res, next) => {
    //     let success = true;
    //     let errorMessage;
    //     if (req.fields.subject = 'Character') {

    //         success = false;
    //         errorMessage = 'Dit bugernavn må kun indeholde store og små bogstaver';
    //     }
    //     if (!req.fields.passphrase || !req.fields.passphrase.lenght > 3) {
    //         success = false;
    //         errorMessage = 'Dit kodeord skal være på minimum 4 tegn';
    //     }
    //     if (success) {
    //         let message;
    //         db.query('INSERT INTO users SET username = ?, passphrase = ?, roles_id = (SELECT id from roles WHERE level = 10)', [req.fields.username, req.fields.passphrase],
    //             (error, result) => { 
    //             if (error) {
    //                 message = `noget gik galt: ${error}`;
    //             } else {
    //                 message = 'Tak for din tilmelding';
    //             }
    //             res.redirect('/login');
    //         });
    //     }
    // });
}