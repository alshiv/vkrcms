const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CMSSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  preview: {
    type: Text,
    required: false,
  },
  detail: {
    type: Text,
    required: false,
  },
  author: {
      type: String,
      required: true
  },
  image: {
      type: String,
      required: false
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  changed_date: {
    type: Date,
  },
});

const CMS = mongoose.model("CMS", CMSSchema);

module.exports = CMS;
