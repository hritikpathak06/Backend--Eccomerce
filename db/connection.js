const mongoose = require("mongoose");

const connectDB = async() => {
    try {
       const connection = await mongoose.connect(process.env.MONGODB_URI);
       console.log("Databse Connected Successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
