const express = require("express");
const { createProductController, getAllProductController } = require("../controller/productController");
const router = express.Router();

router.route("/new").post(createProductController);
router.route("/all").get(getAllProductController);

module.exports = router;
