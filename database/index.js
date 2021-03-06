// Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Local database url
const uri = process.env.DB_URI || "mongodb://localhost/grilloco";

mongoose.connect(uri).then(
  () => {
    // Letting us know mongo connection was successful
    console.log("Connected to Mongo");
  },
  (err) => {
    // Handle initial connection error
    console.log("Error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
