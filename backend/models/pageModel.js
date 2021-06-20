const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  page_type: {
      type: String,
      required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  }
});

const Page = mongoose.model("Page", PageSchema);

module.exports = Page;
