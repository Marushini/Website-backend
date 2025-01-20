const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  profilePicture: { type: String },  // Optional: URL to the faculty member's photo
});

module.exports = mongoose.model("Faculty", FacultySchema);
