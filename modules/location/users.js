module.exports = function (app) {
    app.get('/admin/users', (req, res, next) => {
        res.render('admin/admin.users');
    });
};