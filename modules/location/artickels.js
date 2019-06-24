module.exports = function (app) {
    app.get('/article/', (req, res, next) => {
        db.query(`SELECT id, title, content FROM pages`, (error, results) => {
            res.render('article', {results});
        })
    });
}