var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: Date
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  emailConfirmed: {
    type: Boolean,
    default: false
  },
  emailConfirmToken: {
    type: String
  },
  locked: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema);
