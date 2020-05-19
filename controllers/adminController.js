const db = require("../database/models");

module.exports = {
    getAllSavedPhotos: (req, res) => {
      db.AdminSavedPhoto.find()
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    savePhoto: (req, res) => {
      console.log(db);
      db.AdminSavedPhoto.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    updatePhoto: (req, res) => {
      db.AdminSavedPhoto
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    deleteSavedPhoto: (req, res) => {
      db.AdminSavedPhoto.find({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  };
  