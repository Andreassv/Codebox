module.exports = function (app) {
    app.get('/admin', (req, res, next) => {
        res.render('admin/home');
    });
};