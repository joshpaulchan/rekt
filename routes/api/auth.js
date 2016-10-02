var router = require('express').Router();
var models = require('../../models');

module.exports = function(passport) {
  
  router.get('/confirm-email', (req, res, next) => {
    var emailConfirmToken = req.query.token;
    
    // if token is missing, return error
    if (!emailConfirmToken) {
      return res.status(500).json({
        ok: false,
        error: "Cannot confirm email if the 'token' query paramter is missing."
      });
    }
    
    models.User.findOne({ emailConfirmToken }, (err, u) {
      // mongo retrieval error
      if (err) {
        return res.status(500).json({
          ok: false,
          error: err.toString()
        });
      }
      // nobody with that confirm email token
      if (!u) {
        return res.status(400).json({
          ok: false,
          error: "No such user exists."
        });
      }
      
      // confirm email for user
      u.emailConfirmed = true;
      u.save((err) => {
        // mongo update error
        if (err) {
          return res.status(500).json({
            ok: false,
            error: err.toString()
          });
        }
        // success
        return res.json({
          ok: true
        });
      });
    });
  })
    
  return router;
}
