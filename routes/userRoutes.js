const express = require("express");
const { registerUserController, loginUserController, logoutUserController, loadUserController } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();

// register-user
router.route("/register").post(registerUserController);

// login-user
router.route("/login").post(loginUserController);

// logout-user
router.route("/logout").get(logoutUserController);

// Me
router.route("/me").get(isAuthenticatedUser,loadUserController);

module.exports = router;