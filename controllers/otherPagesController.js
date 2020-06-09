const db = require("../database/models");

module.exports = {
  getOther: (req, res) => {
    db.OtherPages.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  saveOther: (req, res) => {
    db.OtherPages.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateOther: (req, res) => {
    db.OtherPages.findOneAndUpdate({}, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  deleteOther: (req, res) => {
    db.OtherPages.find({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
