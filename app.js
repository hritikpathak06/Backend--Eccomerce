const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);
app.use("/api/v1/user",userRoutes);


module.exports = app;