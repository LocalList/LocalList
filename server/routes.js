const router = require('express').Router();
const path = require('path');
const passport = require('passport');

const controllers = require('./controllers');
const JsonHeaders = { 'Content-Type': 'application/json' };

router.route('/login')
.post(passport.authenticate('local'), (req, res) => {
  let {id, username} = req.user.dataValues;
  res.writeHead(201, JsonHeaders);
  res.end(JSON.stringify({id, username}));
})

router.route('/signup')
.post((req, res) => {
  controllers.user.post(req, res);
})

router.route('/api/auth')
.get((req, res) => {
  let user;
  if (req.user) {
    user = {
      id: req.user.id,
      username: req.user.username
    }
  }
  res.writeHead(200, JsonHeaders);
  res.end(JSON.stringify(user || null));
})

//Only signed in users
router.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
})

router.route('/logout')
.get((req, res) => {
  req.logout();
  res.writeHead(204);
  res.end();
})

router.route('/members')
.get((req, res) => {
	res.writeHead(200);
	res.end(`Welcome, ${req.user.username}!`);
})

module.exports = router;