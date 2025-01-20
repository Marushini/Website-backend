const express = require("express");
const router = express.Router();
const { createFaculty, getFaculty } = require("../controllers/facultyController");

router.post("/", createFaculty);  // Add a new faculty member
router.get("/", getFaculty);      // Get all faculty members

module.exports = router;
