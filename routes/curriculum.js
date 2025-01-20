const express = require("express");
const router = express.Router();
const { getCurriculum } = require("../controllers/curriculumController");

router.get("/", getCurriculum);  // Get curriculum data

module.exports = router;
