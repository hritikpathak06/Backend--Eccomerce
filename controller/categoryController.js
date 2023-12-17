const Category = require("../models/categoryModel");

// Create Category
const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(404)
        .json({ success: false, message: "Please Fill the name" });
    }
    const existingCategory = await Category.find({ name });
    if (!existingCategory) {
      return res.status(200).json({
        success: false,
        message: `${existingCategory} Category Already Exists`,
      });
    }
    const category = await new Category({ name }).save();
    res.status(201).json({
      success: true,
      message: "Category Created Successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get All Categories
const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      success: true,
      message: "All Category Fetched",
      totalCategory: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get Single Category
const getSingleCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "No category Found",
      });
    }
    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {}
};

// Update Category
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "catgeory updated Successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete Category
const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
  getSingleCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
