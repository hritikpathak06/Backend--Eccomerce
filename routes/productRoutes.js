const express = require("express");
const {
  createProductController,
  getAllProductController,
  updateProductController,
  getSingleProduct,
  deleteProductController,
  searchProductController,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

// Create-Product
router.route("/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProductController);

// Get All Products
router.route("/all").get(getAllProductController);

// Update Product
router.route("/update/:id").put(updateProductController);

// Get Single Product
router.route("/:id").get(getSingleProduct).delete(deleteProductController);

// Search product
router.route("/search/:keyword").get(searchProductController);

module.exports = router;
