const router = require('express').Router();
const path = require('path');
const passport = require('passport');

const controllers = require('./controllers');

router.route('/login')
.post(passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login.html',
  session: false
}))

router.route('/signup')
.post((req, res) => {
  controllers.user.post(req, res);
})

module.exports = router;