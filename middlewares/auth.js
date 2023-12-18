const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

// Authentication
const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }
  const decodedData = JWT.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
};


// Admin Authentication
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.role)){
            return next(res.status(401).json({
                success:false,
                message:`Role:${req.user.role} is not allowed to access this resource`
            }))
    }
    next();
  };
};

module.exports = { isAuthenticatedUser, authorizeRoles };
