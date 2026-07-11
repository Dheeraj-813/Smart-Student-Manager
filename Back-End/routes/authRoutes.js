const express = require("express");
const router = express.Router();
const {loginUser} = require("../Controller/authController");

router.post("/login", loginUser);

module.exports = router;