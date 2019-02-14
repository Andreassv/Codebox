module.exports = function (app) {
    app.get('/admin', (req, res, next) => {
        res.render('admin/home');
    });

    app.use('/admin', (req, res, next) => {
        if (!req.session.user) {
            res.redirect('/login');
            return;
        } else {
            next();
        }
    });
};