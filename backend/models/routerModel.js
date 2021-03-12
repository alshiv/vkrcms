const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouterSchema = new Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: false,
  },
});

const Router = mongoose.model("Router", RouterSchema);

module.exports = Router;
