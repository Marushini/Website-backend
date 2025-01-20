const mongoose = require("mongoose");

const HighlightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },
});

module.exports = mongoose.model("Highlight", HighlightSchema);
