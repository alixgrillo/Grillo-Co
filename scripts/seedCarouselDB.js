const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grilloco");

const carouselSeed = [
  {
    title: "Test Title",
    image: "https://via.placeholder.com/468x60?text=About+Us+Picture", 
    description: "This is a test description.",
    button: "About Us"
  },
  {
    title: "Test Title 2",
    image: "https://via.placeholder.com/468x60?text=Contact+Us+Picture", 
    description: "This is another test description.",
    button: "Contact Us"
  }, 

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
