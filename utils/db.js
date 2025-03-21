const mongoose = require("mongoose");
//const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
//mongoose.connect(URI);
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfull to db");
    } catch (error) {
        console.error("database connection is failed");
        process.exit(0);
    }
};
module.exports = connectDb;