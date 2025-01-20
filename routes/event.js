const express = require("express");
const router = express.Router();
const { createEvent, getEvents } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createEvent);  // Create a new event (auth required)
router.get("/", getEvents);                     // Get all events

module.exports = router;
