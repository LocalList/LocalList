const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//refactor to use only promises if possible (remove cb 'done')
passport.use(new LocalStrategy(
  function (username, password, done) {
    models.user.findOne({ username: username })
    .then(user => {
      if (!user) {
        done(null, false, { message: 'Incorrect username.' });
        return;
      }

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

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login.html',
  session: false
}));


app.get('/', (req, res) => {
  res.send('hello mars');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});