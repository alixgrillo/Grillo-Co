const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grilloco");

const carouselSeed = [
  {
    title: "Grillo & Co - Coming Soon",
    image: "award winning design.jpg",
    description: "Website Under Construction",
    button: "About Us",
  },
  {
    title: "Grillo & Co - Coming Soon",
    image: "pepperwood table.jpg",
    description: "Fine Furniture Underway",
    button: "Contact Us",
  },
  {
    title: "Grillo & Co - Coming Soon",
    image: "planing wood in workshop.jpg",
    description: "Website Under Construction",
    button: "Gallery",
  },
];

db.Carousel.remove({})
  .then(() => db.Carousel.collection.insertMany(carouselSeed))
  .then((data) => {
    console.log(data.result.n + "added to list");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
