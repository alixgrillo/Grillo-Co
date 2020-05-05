const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grilloco");

const carouselSeed = [
  {
    title: "Grillo & Co - Coming Soon",
    image: "http://rmfinewoodworking.com/wp-content/uploads/2019/08/Parquetry-Record-Credenza.jpeg", 
    description: "Website Under Construction - Coming Soon",
    button: "About Us"
  },
  {
    title: "Grillo & Co - Coming Soon",
    image: "http://rmfinewoodworking.com/wp-content/uploads/2019/03/Dovetails-and-Inlays-2.jpeg", 
    description: "Website Under Construction - Coming Soon",
    button: "Contact Us"
  },
  {
    title: "Grillo & Co - Coming Soon",
    image: "http://rmfinewoodworking.com/wp-content/uploads/2019/03/Floating-Top-Console-Table-1.jpeg", 
    description: "Website Under Construction - Coming Soon",
    button: "Contact Us"
  }

];

db.Carousel.remove({})
  .then(() => db.Carousel.collection.insertMany(carouselSeed))
  .then(data => {
    console.log(data.result.n + "added to list");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
