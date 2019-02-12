module.exports = function (app) {
    app.get('/admin/sites', (req, res, next) => {
        res.render('admin/admin.sites.ejs');
    });
};