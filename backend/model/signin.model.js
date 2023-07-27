// backend/model/signin.model.js
const mongoose = require('mongoose');

// Define the schema for the SignIn model
const signinSchema = new mongoose.Schema({
  // Define your schema fields here, e.g.
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other fields...
});

// Define the model only if it doesn't exist
const SignIn = mongoose.models.SignIn || mongoose.model('SignIn', signinSchema);

module.exports = SignIn;
