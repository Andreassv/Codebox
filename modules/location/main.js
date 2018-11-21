module.exports = function (app) {
    app.get('/', (req, res, next) => {
        res.send(require('./views/main'));
    });
}