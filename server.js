const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connection")

// Config
dotenv.config();
connectDB();

// Port
const port = process.env.PORT || 4000;

// Test Api
app.get("/",(req,res) => {
    res.send(`<h1>Server Is Working Properly And Fine Order api and Payment Gateway</h1>`)
})

// Server Start Config
app.listen(process.env.PORT,() => {
    console.log(`Sever is listening on the port:${process.env.PORT}`)
})
