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


// Update Product
const updateProductController = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
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


// Get Single Product
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "No Product Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product Fetched Successfully",
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


// Delete Product
const deleteProductController = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Error",
      error: error.message,
    });
  }
};


// Search Product
const searchProductController = async (req, res) => {
  try {
    const product = await Product.find({
      $or: [
        { name: { $regex: req.params.keyword, $options: "i" } },
        { description: { $regex: req.params.keyword, $options: "i" } },
      ],
    });
    res.status(200).json({
      success: true,
      message: "Product Found Successully",
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

module.exports = {
  createProductController,
  getAllProductController,
  updateProductController,
  getSingleProduct,
  deleteProductController,
  searchProductController,
};
