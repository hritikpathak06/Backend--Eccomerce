const Product = require("../models/productModel");

// Create Product
const createProductController = async (req, res) => {
  try {
    const { name, description, price, images, category, stock } = req.body;
    if (!name || !description || !price || !images || !category || !stock) {
      return res.status(404).json({
        success: false,
        message: "Fill Out All the fields",
      });
    }
    const product = await new Product({
      name,
      description,
      price,
      category,
      stock,
      images,
    }).save();

    res.status(201).json({
      success: true,
      message: "Product Created Succesfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};


// Get All Products
const getAllProductController = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({
      success: true,
      message: "All Product fetched Successfully",
      totalProduct: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};

module.exports = { createProductController, getAllProductController };
