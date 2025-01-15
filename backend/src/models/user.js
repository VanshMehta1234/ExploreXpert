const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },
  username: String,
  email: String,
  // ... other fields
});

module.exports = mongoose.model('User', userSchema);