const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register A User
const registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await new User({
      username,
      email,
      password,
      avatar: {
        public_id: "sample public id",
        url: "profile pic url",
      },
    }).save();
    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Login User
const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or password",
      });
    }
    const isPasswordMatched = user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Logout User
const logoutUserController = async (req, res) => {
  try {
    res.cookie("token",null,{
      expires:new Date(Date.now()),
      httpOnly:true
    })
    res.status(200).json({
      success:true,
      message:"User Logged Out Successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Load User
const loadUserController = async(req,res) => {
  
}

module.exports = {
  registerUserController,
  loginUserController,
  logoutUserController,
};
