const express = require("express");
const { registerUser } = require("./usercontrolle");

const router = express.Router()
const registerUser = require("./usercontrolle");

router.route("/api/v1/register").post(registerUser)

module.exports = router;