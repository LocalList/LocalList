const router = require('express').Router();
const passport = require('passport');

const controllers = require('./controllers');

const JsonHeaders = { 'Content-Type': 'application/json' };

// authorization middleware
const auth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.writeHead(401);
    res.end();
  }
};

router.route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    const { id, username } = req.user.dataValues;
    res.writeHead(201, JsonHeaders);
    res.end(JSON.stringify({ id, username }));
  });

router.route('/signup')
  .post((req, res) => {
    controllers.user.post(req, res);
  });

router.route('/auth')
  .get((req, res) => {
    let user;
    if (req.user) {
      user = {
        id: req.user.id,
        username: req.user.username,
      };
    }
    res.writeHead(200, JsonHeaders);
    res.end(JSON.stringify(user || null));
  });


router.route('/jobs')
  .get(controllers.job.getAll)
  .post(auth, controllers.job.post);

router.route('/jobs/:id')
  .get(controllers.job.getOne)
  .put(auth, controllers.job.markCom);

router.route('/jobs/:id/claim')
  .get(auth, controllers.job.claim);

router.route('/reviews')
  .get(controllers.review.get)
  .post(auth, controllers.review.post);


router.route('/logout')
  .get(auth, (req, res) => {
    req.logout();
    res.writeHead(204);
    res.end();
  });


// test, to remove
router.route('/members')
  .get(auth, (req, res) => {
    res.writeHead(200);
    res.end(`Welcome, ${req.user.username}!`);
  });

module.exports = router;
