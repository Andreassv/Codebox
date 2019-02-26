// const db = require('../config/mysql')();

module.exports = function (app) {
    app.use('/profile', (req, res, next) => {
		if (!req.session.userid) {
			res.redirect('/login');
			return;
		} else {
			next();
		}
	});
    app.get('/profile', (req, res, next) => {
        res.render('admin/profile.ejs');
    });

// 	app.get('/profile', (req, res, next) => {
// 		db.query('SELECT * FROM userprofiles WHERE id = ?', [req.session.userid], (err, result) => {
// 		db.query(`SELECT * FROM ingredients right join users on users.id = 
// 				 ingredients.recipes_id where users.id = ?;`,[req.session.userid], (err, results) => {
// 			if (err) return next(`${err} at db.query (${__filename}:15:5)`);
// 			res.render('profile', { title: 'Profil', user: result[0], 'results': results });
// 			console.log(results);
// 		});
// 		});
// 	});

// 	app.patch('/profile', (req, res, next) => {
// 		db.query('UPDATE profiles SET firstname = ?, lastname = ?, bio = ? WHERE users_id = ?', [req.fields.firstname, req.fields.lastname, req.fields.bio, req.session.userid], (err, result) => {
// 			if (err) return next(`${err} at db.query (${__filename}:23:5)`);
// 			res.status(204);
// 			res.end();
// 		})
// 	});

// 	app.patch('/profile/image', (req, res, next) => {
// 		if (!req.files || !req.files.photo) {
// 			return next(`File not found (${__filename}:29:5)`);
// 		}
// 		const file = req.files.photo;
// 		const renamedFilename = `${Date.now()}_${file.name}`;
// 		console.log(renamedFilename);
// 		fs.readFile(file.path, (err, data) => {
// 			if (err) return next(`${err} at fs.readFile (${__filename}:35:5)`);
// 			fs.writeFile(`./public/uploads/${renamedFilename}`, data, err => {
// 				if (err) return next(`${err} at fs.writeFile (${__filename}:37:7)`);
// 				db.query('INSERT INTO photos SET name = ?', [renamedFilename], (err, result) => {
// 					if (err) return next(`${err} at db.query (${__filename}:39:9)`);
// 					db.query('UPDATE profiles SET photos_id = ? WHERE users_id = ?', [result.insertId, req.session.userid], (err, result) => {
// 						if (err) return next(`${err} at db.query (${__filename}:41:11)`);
// 						res.status(200);
// 						res.json({
// 							photo: renamedFilename
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
};