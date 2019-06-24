const db = require("../config/mysql")();

exports.getOneCard = function (id) {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM cards WHERE id = ?", [id], function(err, result) {
            if (err) return reject(err);
            resolve(result[0])
        });
    });
};
exports.getRarity = function () {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM raritys", function(err, result) {
            if (err) return reject(err);
            resolve(result)
        });
    });
};
exports.getType = function () {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM cardtypes", function(err, result) {
            if (err) return reject(err);
            resolve(result)
        });
    });
};
exports.getEnergy = function () {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM energys", function(err, result) {
            if (err) return reject(err);
            resolve(result)
        });
    });
};
exports.getChar = function () {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM charclasses", function(err, result) {
            if (err) return reject(err);
            resolve(result)
        });
    });
};

