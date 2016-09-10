var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  password: {
    type: String
    require: true,
  }
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: Date
  },
  email: {
    type: String
    required: true,
    unique: true
  },
  emailConfirmed: {
    type: boolean,
    default: false
  },
  emailConfirmToken: {
    type: String
  },
  locked: {
    type: boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema);
