var models = require('../models');
var Strategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

module.exports = new Strategy(function(username, password, done) {
  // Find the user with the given username
  models.User.findOne({ username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.error(err);
      done(err);
      return;
    }
    // if no user present, auth failed
    if (!user) {
      console.log(user);
      done(null, false, { message: 'Incorrect username.' });
      return;
    }
    // if passwords do not match, auth failed
    bcrypt.compare(password, user.password, function(err, res) {
      // res == true
      if (!res) {
        done(null, false, { message: 'Incorrect password.' });
        return;
      }
      // auth has has succeeded
      done(null, user);
      return;
    });
  });
});
