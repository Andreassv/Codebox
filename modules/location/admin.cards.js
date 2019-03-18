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
    // function featureChecker() {
    //     const form = document.getElementById('createForm_image');
    //     return(('draggable' in form) || ('ondragstart' in form && 'ondrop' in form)) && 'FileReader' in window && 'FormData' in window;
    // }

    // if(featureChecker()) {
    //     ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    //         form.addEventListener(eventName, preventDefaults, false);
    //     });
    //     function preventDefaults(e) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }
    //     form.addEventListener('drop', handleDrop, false);

    //     function handleDrop(e) {
    //         let dt = e.dataTransfer;
    //         let files = dt.files;
    
    //         let reader = new FileReader();
    //     }
    // };
    app.post('/admin/cards', async (req, res, next) => {
        if (!/image/.test(req.files.file.type)) {
            return res.send('Den uploadede fil er ikke et billede')
        }
        try {
            const uploadDir = '.public/img/';
            const data = fs.readFileSync(req.files.file.path);
            const newImageName = Date.now() + '_' + req.files.file.name;
            fs.writeFileSync(uploadDir + newImageName, data);
            
            const result = await db.query(`INSERT INTO cards SET name = ?, image = ?, fk_rarity = ?, fk_type = ?, 
            energy = ?, description = ?, name_plus = ?, energy_plus = ?, description_plus = ?, fk_charclass = ?`,
                [req.fields.name, newImageName, req.fields.rarity, req.fields.type, req.fields.energy, 
                req.fields.decription, req.fields.name_plus, req.fields.energy_plus, 
                req.fields.description_plus, req.fields.character], (err, rows) => {
                    if (err) return next(err);
                    res.redirect('/img/' + newImageName);
            })
        } catch (error) {
            return next(error);
        }

    });
    // app.post('/admin/cards', (req, res, next) => {
    //     const uploadDir = '.public/img/';
    //     if (!req.files || !req.files.file) {
    //         return next(new Error('ingen billeder er fundet'));
    //     }
    //     fs.readFile(req.files.file.path, (err, data) => {
    //         if (err) {
    //         return next(new Error('der er opstået en uventet fejl'));
    //         }
    //         fs.writeFile(`./public/img/${req.files.file.name}`, data, (err) => {
    //             if (err) {
    //                 return next(new Error('Filen kan ikke gemmes.'));
    //             }
    //         });
    //     });
    
    //     db.query(`INSERT INTO cards SET name = ?, image = ?, fk_rarity = ?, fk_type = ?, 
    //     energy = ?, description = ?, name_plus = ?, energy_plus = ?, description_plus = ?, fk_charclass = ? `,
    //     [req.fields.name, req.files.file, req.fields.rarity, req.fields.type, req.fields.energy, req.fields.decription, req.fields.name_plus, req.fields.energy_plus, req.fields.description_plus, req.fields.character], (err, rows) => {
    //         if (err) throw new Error(err);
    //         res.redirect(`/admin/cards`);
    //     });
    // });

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