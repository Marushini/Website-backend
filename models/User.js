const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Use bcryptjs instead of bcrypt

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving the user document
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // Use bcryptjs to hash the password
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
