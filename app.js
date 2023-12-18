const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Routes
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Routes Start Point
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);
app.use("/api/v1/user",userRoutes);


module.exports = app;