const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    fs.readdir(__dirname, { withFileTypes: true}).forEach(file=> {
        if (file.name !== basename(__filename)) {
        require(path.join(__dirname, file.name))(app);
        }
    });
};