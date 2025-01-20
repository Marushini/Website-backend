const Curriculum = require("../models/Curriculum");

const getCurriculum = async (req, res) => {
  try {
    const curriculum = await Curriculum.find();
    res.status(200).json(curriculum);
  } catch (err) {
    res.status(500).json({ message: "Error fetching curriculum" });
  }
};

module.exports = { getCurriculum };
