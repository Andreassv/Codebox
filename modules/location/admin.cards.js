const db = require('../../config/mysql')();

module.exports = function (app) {
    app.get('/admin/cards', (req, res, next) => {
        db.query(`SELECT cards.id, name, image, niveau, variant, energy, description, name_plus, energy_plus, description_plus, char_name FROM cards
        INNER JOIN raritys ON fk_rarity = raritys.id
        INNER JOIN cardtypes ON fk_type = cardtypes.id
        INNER JOIN characters ON fk_charclass = characters.id;`, (error, results) => {
            res.render('admin/admin.cards.ejs', {results});
        })
    });

    app.get('/admin/create-card', (req, res, next) => {
        res.render('admin/admin.create-card.ejs');
    });

    app.post('/admin/cards', (req, res, next) => {

        

        db.query(`INSERT INTO cards SET name = ?, image = ?, fk_rarity = ?, fk_type = ?, 
        energy = ?, description = ?, name_plus = ?, energy_plus = ?, description_plus = ?, fk_charclass = ? `,
        [req.fields.name, req.files.file, req.fields.rarity, req.fields.type, req.fields.energy, req.fields.decription, req.fields.name_plus, req.fields.energy_plus, req.fields.description_plus, req.fields.character], (err, rows) => {
            if (err) throw new Error(err);
            res.redirect(`/admin/cards`);
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