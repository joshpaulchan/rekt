var router = require('express').Router();
const _ = require('underscore');
const bcrypt = require('bcrypt');
const models = require('../../models');

module.exports = function(passport) {
  
  // /api/register
  // 
  // This route is responsible for creating a new user object
  router.post('/register', (req, res) => {
    var userData = _.pick(req.body, ['username', 'password']);
    var u = new models.User(userData).save(function() {
      
    })
  });
  
  reouter.get()
    
  return router;
}
