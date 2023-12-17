const express = require("express");
const { registerUserController } = require("../controller/userController");
const router = express.Router();

// register-user
router.route("/create").post(registerUserController)

module.exports = router;