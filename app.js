const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoutes");

app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);


module.exports = app;