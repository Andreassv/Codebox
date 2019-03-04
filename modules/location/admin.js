module.exports = function (app) {
    app.get('/admin', (req, res, next) => {
        res.render('admin/home');
    });

    app.use('/admin', (req, res, next) => {
        // next();
        if (!req.session.userid) {
            res.redirect('/login');
            return;
        } else {
            next();
        }
    });
};