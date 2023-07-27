const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const SignIn = mongoose.models.SignIn || mongoose.model('SignIn', signinSchema);

module.exports = SignIn;
