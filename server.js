const app = require('express')();
const pjson = require('./package.json');
const port = process.env.PORT || 3000;

require('./config/index')(app);
require('./modules/location/index')(app);
require('./error-handling/index')(app);

app.listen(port, error => {
    if (error) {
        debug(error);
        return;
    }
    debug(`${pjson.name} v${pjson.version} is running on http://localhost:${port}`);
});

