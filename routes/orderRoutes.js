const express = require("express");
const { createOrderController } = require("../controller/orderController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();

router.route("/new").post(isAuthenticatedUser, createOrderController);

module.exports = router;
