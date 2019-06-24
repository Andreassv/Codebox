const db = require("../../config/mysql")();

module.exports = function (app) {
    app.get('/article/', (req, res, next) => {
        db.query(`SELECT id, titel, content FROM pages`, (err, results) => {
            if(err){
                throw err;
            }
            res.render('article', {results});
        })
    });
    app.get('/article/:id', (req, res, next) => {
        let id = req.params.id;
        db.query(`SELECT id, titel, content FROM pages WHERE id = ?`,[id], (err, results) => {
            if(err){
                throw err;
            }
            res.render('pages', {results});
        })
    });
}