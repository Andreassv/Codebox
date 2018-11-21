const app = require('express')();
const mysql = require('mysql');
const pjson = require('./package.json');

require('./modules/location/index')(app);
require('./config/index')(app);

app.listen(3000);

// Setup database connection
const db = mysql.createPool({
	'connectionLimit': 10,
	'host': process.env.DB_HOST,
	'user': process.env.DB_USER,
	'password': process.env.DB_PSWD,
	'database': process.env.DB_DTBS
});

// SERVER INIT
// ============================================================================
spdy.createServer(options, app).listen(port, () => {
	debug(
		`${pjson.name} v${pjson.version} is running on https://${process.env.SITE_HOST}:${port}`
	);
});
