const app = require('express')();
const pjson = require('./package.json');

require('./modules/location/index')(app);
require('./config/index')(app);

app.listen(3000);

