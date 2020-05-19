const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSavedPhotoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  keyword: { type: String },
  photoInfo: { type: Object },
});
const AdminSavedPhoto = mongoose.model("AdminSavedPhoto", adminSavedPhotoSchema);
module.exports = AdminSavedPhoto;
