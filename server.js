//require(`dotenv`).config({ path: './client' });
require("dotenv").config();
require(`dotenv`).config({ path: "./" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
//const MongoStore = require("connect-mongo")(session);
//const passport = require("./passport");
const path = require("path");
var multer = require("multer");

// Route requires
//const user = require("./routes/user");
const apiRoutes = require("./routes/apiRoutes");
const apiFileUpload = require("./routes/apiFileUpload");

const app = express();
const cors = require("cors");
//const logger = require("morgan");
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   //app.use(express.static('client/build'));
//   app.use(express.static(path.join(__dirname, "grillo-and-co/build")));
// }

//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

// Routes
require("./routes/apiFileUpload")(app, multer);
require("./routes/emailRoute")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  //app.use(express.static('client/build'));
  app.use(express.static(path.join(__dirname, "grillo-and-co/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "grillo-and-co/build", "index.html"));
    // res.sendFile(path.join(__dirname, "grillo-and-co/build"), function (err) {
    //   if (err) {
    //     res.status(500).send(err);
    //   }
    // });
  });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grilloco", {
  useNewUrlParser: true,
});

// Start the API server
app.listen(PORT, function () {
  console.log(
    `🌎  ==> API Server now listening on PORT ${PORT}! ${process.env.MONGODB_URI}`
  );
});
