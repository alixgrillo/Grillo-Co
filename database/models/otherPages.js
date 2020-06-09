const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otherPagesSchema = new Schema({
  aboutUsPhoto: { type: String },
});
const OtherPages = mongoose.model("OtherPages", otherPagesSchema);
module.exports = OtherPages;
