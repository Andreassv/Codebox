const db = require('../../config/mysql')();

module.exports = function (app) {
    app.get('/cards', (req, res, next) => {
        db.query(`SELECT cards.id, name, image, niveau, variant, energys.cost, description, char_name FROM cards
		INNER JOIN energys ON fk_energy = energys.id
        INNER JOIN raritys ON fk_rarity = raritys.id
        INNER JOIN cardtypes ON fk_type = cardtypes.id
        INNER JOIN characters ON fk_charclass = characters.id;`, (error, results) => {
            res.render('cards.ejs', {results});
        })
    });
    app.get('/cards/:id', (req, res, next) => {
        let id = req.params.id;
        db.query(`SELECT cards.id, name, image, niveau, variant, energys.cost, description, char_name FROM cards
		INNER JOIN energys ON fk_energy = energys.id
        INNER JOIN raritys ON fk_rarity = raritys.id
        INNER JOIN cardtypes ON fk_type = cardtypes.id
        INNER JOIN characters ON fk_charclass = characters.id
        WHERE cards.id = ?`,[id], (err, results) => {
            if(err){
                throw err;
            }
            res.render('soloCard.ejs', {results});
        })
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
    
};