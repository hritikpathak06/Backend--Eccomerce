const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
const categoryRoutes = require("./routes/categoryRoute");

app.use("/api/v1/category",categoryRoutes);


module.exports = app;