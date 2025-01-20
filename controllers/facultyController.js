const Faculty = require("../models/Faculty");

const createFaculty = async (req, res) => {
  const { name, designation, department, email, phone, profilePicture } = req.body;

  try {
    const newFaculty = new Faculty({ name, designation, department, email, phone, profilePicture });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(500).json({ message: "Error adding faculty member" });
  }
};

const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ message: "Error fetching faculty" });
  }
};

module.exports = { createFaculty, getFaculty };
