const router = require('express').Router();
const path = require('path');
const passport = require('passport');

const controllers = require('./controllers');
const JsonHeaders = { 'Content-Type': 'application/json' };

//authorization middleware
const auth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.writeHead(401);
    res.end();
  }
};

//test, to remove
router.route('/test')
.get((req, res) => {
  res.writeHead(200);
  res.end('hey');
})

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

router.route('/auth')
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

router.route('/jobs')
.get(controllers.job.getAll)
.post(controllers.job.post)

router.route('/jobs/:id')
.get(controllers.job.getOne)

router.route('/logout')
.get(auth, (req, res) => {
  req.logout();
  res.writeHead(204);
  res.end();
})


//test, to remove
router.route('/members')
.get(auth, (req, res) => {
	res.writeHead(200);
	res.end(`Welcome, ${req.user.username}!`);
})

module.exports = router;