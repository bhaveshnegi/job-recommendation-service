const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: [String], required: true },  // Enforcing skills array
  experience_level: { type: String, required: true },
  preferences: {
    desired_roles: { type: [String], required: true },  // Enforcing desired_roles array
    locations: { type: [String], required: true },
    job_type: { type: String, required: true }
  }
});

module.exports = mongoose.model('User', UserSchema);
