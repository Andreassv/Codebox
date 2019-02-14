const db = require('../../config/mysql')();

module.exports = function (app) {
    app.get('/admin/sites', (req, res, next) => {
        db.query('SELECT id, titel FROM pages', (error, results) => {
            res.render('admin/admin.sites.ejs', {results});
        })
    });
};