const db = require("../../config/mysql")();
const bcrypt = require('bcryptjs');

module.exports = function (app) {
    app.get('/login', (req, res) => {
        res.render('login', { 'title': 'Log in'});
    });
    
    app.post('/login', (req, res) => {
        db.query(`SELECT users.id, users.username, users.passphrase, roles.level FROM users 
        INNER JOIN roles ON roles.id = users.roles_id
        WHERE username = ?`, 
        [req.fields.username], (err, result) => { 
        if (err) return res.send(err);
            let errormessage;
            if (result.length === 1) {
                if(bcrypt.compareSync(req.fields.passphrase, result[0].passphrase)){
                    req.session.userid = result[0].id;
                    req.session.role = result[0].level;
                    //console.log(req.session.role);
                    if (req.session.role < 21){
                        res.redirect('/admin');
                    }                
                    else if (req.session.role < 90){
                        res.redirect('/admin/users');
                    }
                    else if (req.session.role >= 90){
                        res.redirect('/admin/sites');
                    }  
                }
            } else {
                res.redirect('/login');
                errorMessage = 'Dit brugernavn eller adgangskode er forkert';
            }
        });
        //console.log(req.fields);
    });
    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/');
    });
};