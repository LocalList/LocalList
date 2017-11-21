const router = require('express').Router();
const path = require('path');
const passport = require('passport');

const controllers = require('./controllers');

router.route('/login')
.post(passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login.html'
}))

router.route('/signup')
.post((req, res) => {
  controllers.user.post(req, res);
})

router.use((req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect('/login.html');
	}
})

router.route('/logout')
.get((req, res) => {
  req.logout();
  res.redirect('/login.html')
})

router.route('/members')
.get((req, res) => {
	res.writeHead(200);
	res.end(`Welcome, ${req.user.username}!`);
})

module.exports = router;