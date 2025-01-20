const Highlight = require("../models/Highlight");

const createHighlight = async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const newHighlight = new Highlight({ title, description, date });
    await newHighlight.save();
    res.status(201).json(newHighlight);
  } catch (err) {
    res.status(500).json({ message: "Error adding highlight" });
  }
};

const getHighlights = async (req, res) => {
  try {
    const highlights = await Highlight.find();
    res.status(200).json(highlights);
  } catch (err) {
    res.status(500).json({ message: "Error fetching highlights" });
  }
};

module.exports = { createHighlight, getHighlights };
