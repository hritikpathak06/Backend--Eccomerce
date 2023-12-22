const Order = require("../models/orderModel");
const User = require("../models/userModel")

// Create order
const createOrderController = async(req,res,next) => {
  const {shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice,shippingPrice, totalPrice} = req.body;
  try {
    // const user = await User.find(req.user.id)
    const order = await Order.create({
      shippingInfo, 
      orderItems, 
      paymentInfo, 
      itemPrice, 
      taxPrice,
      shippingPrice, 
      totalPrice,
      paidAt:Date.now(),
      user:req.user._id
    })
    
    res.status(201).json({
      success:true,
      order
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error.message,
    });
  }
};

module.exports = { createOrderController };
