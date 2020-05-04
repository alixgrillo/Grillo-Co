const db = require("../database/models");

module.exports = {
  allCarousel: (req, res) => {
    db.Carousel.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createCarousel: (req, res) => {
    db.Carousel.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateCarousel: (req, res) => {
    db.Carousel
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  deleteCarousel: (req, res) => {
    db.Carousel.find({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
