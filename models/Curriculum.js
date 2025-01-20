const mongoose = require("mongoose");

const CurriculumSchema = new mongoose.Schema({
  program: { type: String, required: true },
  courses: [
    {
      courseName: { type: String, required: true },
      courseCode: { type: String, required: true },
      credits: { type: Number },
      description: { type: String },
    },
  ],
});

module.exports = mongoose.model("Curriculum", CurriculumSchema);
