const express = require("express");
const { registerUserController, loginUserController, logoutUserController } = require("../controller/userController");
const router = express.Router();

// register-user
router.route("/register").post(registerUserController);

// login-user
router.route("/login").post(loginUserController);

// logout-user
router.route("/logout").get(logoutUserController);

module.exports = router;