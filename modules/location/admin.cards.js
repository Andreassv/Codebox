const db = require('../../config/mysql')();
const fs = require('fs');

const cardService = require("../../services/cards");

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
        if (!/image/.test(req.files.image.type)) {
            return res.send('Den uploadede fil er ikke et billede')
        }
        try {
            const uploadDir = './public/img/';
            const data = fs.readFileSync(req.files.image.path);
            const newImageName = Date.now() + '_' + req.files.image.name;
            fs.writeFileSync(uploadDir + newImageName, data);
            
            const result = await db.query(`INSERT INTO cards SET name = ?, image = ?, fk_rarity = ?, fk_type = ?, 
            energy = ?, description = ?, name_plus = ?, energy_plus = ?, description_plus = ?, fk_charclass = ?`,
                [req.fields.name, newImageName, req.fields.rarity, req.fields.type, req.fields.energy, 
                req.fields.description, req.fields.name_plus, req.fields.energy_plus, 
                req.fields.description_plus, req.fields.character], (err, rows) => {
                    if (err) return next(err);
                    res.redirect('/admin/cards');
            })
        } catch (error) {
            return next(error);
        }

    });

    app.get('/admin/edit-card/:id', async (req, res, next) => {
        try {
            const card = await cardService.getOneCard(req.params.id);
            const rarity = await cardService.getRarity();
            const types = await cardService.getType();
            res.render('admin/admin.edit-card.ejs', { 'results':card,rarity,types});
        } catch (error) {
            next(error);
        }
    });

    app.post('/admin/edit-card/:id', async (req, res, next) => {
        if (!/image/.test(req.files.image.type)) {
            return res.send('Den uploadede fil er ikke et billede')
        }
        try {
            const uploadDir = './public/img/';
            const data = fs.readFileSync(req.files.image.path);
            const newImageName = Date.now() + '_' + req.files.image.name;
            db.query(`SELECT image FROM cards WHERE cards.id = ?`), [req.params.id] , (err, rows) => {
                fs.unlink(`./public/img/${rows[0].image}`, (err, data) => {
                    if(err) {
                        return next(err);
                    }   
                });
            };
            fs.writeFileSync(uploadDir + newImageName, data);
            
            db.query(`UPDATE cards SET name = ?, image = ?, fk_rarity = ?, fk_type = ?, 
            energy = ?, description = ?, name_plus = ?, energy_plus = ?, description_plus = ?, fk_charclass = ? WHERE cards.id = ?`,
                [req.fields.name, newImageName, req.fields.rarity, req.fields.type, req.fields.energy, 
                req.fields.description, req.fields.name_plus, req.fields.energy_plus, 
                req.fields.description_plus, req.fields.character, req.params.id], (err, rows) => {
                    if (err) return next(err);
                    res.redirect('/admin/cards');
            });
        } catch (error) {
            return next(error);
        }
    });     

    // Delete funktion som fjerner billede fra public mappen og fra databasen.
    app.delete('/admin/delete-card/:id', (req, res, next) => {
        let id = req.params.id
        db.query(`SELECT image FROM cards WHERE id = ?`,[id], (err, data) => {
            console.log(data)
            if(err) {
                throw err;
            }
            fs.unlink(`./public/img/${data[0].image}`, (err, data) => {
                if(err) {
                    throw err;
                }   
            });
            db.query('DELETE FROM cards WHERE id=?',[req.params.id], (err, data) => {
                if(err) {
                    throw err;
                }
                res.status(200);
                res.end();
            })
            res.redirect('/admin/cards');
        })
    });
};