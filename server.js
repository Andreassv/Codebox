const app = require('express')();

require('./modules/views/index')(app);

app.listen(3000);