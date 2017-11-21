const models = require('../models');

module.exports = {
	post: (req, res) => {
		if (req.body.password.length < 6) {
			res.writeHead(400);
			res.end('password too short');
		} else {
			models.user.create(req.body)
			.then(user => {
				req.login(user, () => {
					res.redirect('/');
				});
			})
			.catch(err => {
				if (err.name === 'SequelizeUniqueConstraintError') {
					res.writeHead(400);
					res.end('user already exists');
				} else {
					throw err;
				}
			})
		}
	}
}