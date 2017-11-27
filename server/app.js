const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');

const models = require('./models');
const router = require('./routes.js');


const app = express();

// passport sessions
// refactor with promises
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  models.user.findById(userId)
    .then((user) => {
      done(null, user);
    });
});

// refactor to use only promises if possible (remove cb 'done')
// also maybe move somewhere else
passport.use(new LocalStrategy((username, password, done) => {
  models.user.findOne({ where: { username } })
    .then((user) => {
      if (!user) {
        done(null, false, { message: 'Incorrect username.' });
        return;
      }

      user.validatePassword(password)
        .then((passwordIsMatch) => {
          if (passwordIsMatch) {
            done(null, user);
          } else {
            done(null, false, { message: 'Incorrect password.' });
          }
        });
    })
    .catch((err) => {
      done(err);
    });
}));

// middleware
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 's3cr3t',
  secure: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.all('/*', (req, res) => {
  res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
