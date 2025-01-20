const express = require("express");
const router = express.Router();
const { createHighlight, getHighlights } = require("../controllers/highlightController");

router.post("/", createHighlight);  // Add a new highlight
router.get("/", getHighlights);     // Get all highlights

module.exports = router;
