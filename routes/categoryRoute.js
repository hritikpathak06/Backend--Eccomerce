const express = require("express");
const {
  createCategoryController,
  getAllCategoriesController,
  updateCategoryController,
  deleteCategoryController,
  getSingleCategoryController,
} = require("../controller/categoryController");
const router = express.Router();

router.route("/create-category").post(createCategoryController);
router.route("/get-categories").get(getAllCategoriesController);
router.route("/get-category/:id").get(getSingleCategoryController);
router.route("/update-category/:id").put(updateCategoryController);
router.route("/delete-category/:id").delete(deleteCategoryController);

module.exports = router;
