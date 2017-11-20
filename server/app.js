const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');

const models = require('./models');
const router = require('./routes.js');


const app = express();

//middleware
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//refactor to use only promises if possible (remove cb 'done')
//also maybe move somewhere else
passport.use(new LocalStrategy(
  function (username, password, done) {
    models.user.findOne({ where: { username: username }})
    .then(user => {
      if (!user) {
        done(null, false, { message: 'Incorrect username.' });
        return;
      }

      console.log(user.username);
      user.validatePassword(password)
      .then(passwordIsMatch => {
        if (passwordIsMatch) {
          done(null, user);
        } else {
          done(null, false, { message: 'Incorrect password.' });
        }
      })
    })
    .catch(err => {
      done(err); 
    });
  }
));

app.use(router);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});