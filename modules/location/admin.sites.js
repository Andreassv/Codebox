const db = require('../../config/mysql')();

module.exports = function (app) {
    app.get('/admin/sites', (req, res, next) => {
        db.query(`SELECT pages.id, titel, username FROM pages
        INNER JOIN users ON fk_author = users.id`, (error, results) => {
            res.render('admin/admin.sites.ejs', {results});
        })
    });

    app.get('/admin/create-site', (req, res, next) => {
        res.render('admin/admin.create-site.ejs');
    });

    app.post('/admin/sites', (req, res, next) => {
        db.query('INSERT INTO pages SET titel = ?, content = ?, fk_author = ?',
        [req.fields.title, req.fields.content, req.session.userid], (err, rows) => {
            if (err) throw new Error(err);
            res.redirect(`/admin/sites`);
        });
    });

    app.get('/admin/edit-site/:id', (req, res, next) => {
        db.query(`SELECT id, titel, content FROM pages
        WHERE id = ?`,[req.params.id], (error, results) => {
            res.render('admin/admin.edit-site.ejs', { page:results[0]});
        })
    });

    app.post('/admin/edit-site/:id', (req, res, next) => {
        db.query('UPDATE pages SET titel = ?, content = ? WHERE id = ?',
        [req.fields.title, req.fields.content, req.params.id], (err, rows) => {
            if (err) throw new Error(err);
            res.redirect(`/admin/sites`);
        });
    });

    app.get('/admin/delete-page/:id', (req, res, next) => {
        db.query(`DELETE FROM pages WHERE id = ?`,[req.params.id], (error, results) => {
            res.redirect('/admin/sites');
        })
    });
};