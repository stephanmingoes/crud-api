const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
