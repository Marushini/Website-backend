const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");

router.post("/login", loginUser);  // Login route

module.exports = router;
