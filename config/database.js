const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);

//async function dbConnect
async function dbConnect() {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}

module.exports = dbConnect;
