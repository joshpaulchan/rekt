var router = require('express').Router();
var models = require('../../models');
var _ = require('underscore');

module.exports = function(passport) {
  
  // GET `/confirm-email`
  // Confirms the user's email who's confirmToken matches the token passed in
  // via query params.
  // 
  // @pre: the user must have registered and had a confirmToken generated
  // @post: if valid, the user who registered will have her email confirmed
  // 
  // @params: token : String : token of user passed in via query params
  // @returns: none
  router.get('/confirm-email', (req, res, next) => {
    var emailConfirmToken = req.query.token;
    
    // if token is missing, return error
    if (!emailConfirmToken) {
      return res.status(500).json({
        ok: false,
        error: "Cannot confirm email if the 'token' query parameter is missing."
      });
    }
    
    models.User.findOne({ emailConfirmToken }, (err, u) => {
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
  });
  
  // POST `/login`
  // Logs in the user with the supplied username and password credentials in the
  // POST body.
  // 
  // @pre: a potential user submitted login credentials
  // @pre: to be successful, the user must be previously registered
  // @pre: to be successful, the user must have submitted her valid credentials
  // @post: the user is successfully logged in
  // 
  // @params: username : String : username of the user attempting to log in
  // (passed in via POST body)
  // @params: password : String : password of the user attempting to log in
  // (passed in via POST body)
  // @returns: Object : confirmation/rejection object
  //    ok: true || false
  //    [user] : user object (if login is successful)
  router.post('/login', passport.authenticate('local'), (req, res) => {
    if (req.isAuthenticated()) {
      return res.json({
        ok: true,
        user: _.pick(req.user, ['email', 'username'])
      });
    } else {
      return res.json({
        ok: false
      });
    }
  });
  
  // POST `/register`
  // Registers a potential user.
  // 
  // @pre: a potential user submitted login credentials
  // @pre: to be successful, the user must supply a unique email (username)
  // value and a password
  // @post: the user is successfully registered
  // s
  // @params: username : String : actually, email of the user attempting to log
  // in (passed in via POST body)
  // @params: password : String : password of the user attempting to log in
  // (passed in via POST body)
  // @returns: Object : confirmation/rejection object
  //    ok: true || false
  //    [user] : user object (if login is successful)
  //    [error]: error string (if login is unsuccessful)
  router.post('/register', (req, res) => {
    var user = _.pick(req.body, ['username', 'password']);
    // TODO: hash password
    // TODO: generate real confirmToken
    var u = new models.User({
      email : user.username,
      emailConfirmToken : 'lol',
      password : user.password,
    });
    u.save(function(err, u) {
      if (err) {
        console.log("[user create error]", err);
        return res.status(500).json({
          ok: false,
          error : "Error creating the user"
        });
      }
      res.json({
        ok: true,
        user: u
      });
    });
  });
  
  // POST `/logout`
  // Logs the currently logged-in out.
  // 
  // @pre: a potential user submitted login credentials
  // @pre: to be successful, the user must be previously logged in
  // @post: the user is successfully logged out and cannot access/interact with
  // authenticated content
  // 
  // @params: none
  // @returns: Object : confirmation/rejection object
  //    ok: true || false
  router.post('/logout', passport.authenticate('local'), (req, res) => {
    req.logout();
    return res.json({
      ok: true
    });
  })
    
  return router;
}
