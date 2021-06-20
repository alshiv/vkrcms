const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeneralSettingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    tyoe: String,
    required: false
  },
  email: {
      type: String,
      required: true,
      trim: true
  },
  favicon: {
      type: String,
      required: false
  }
});

const GeneralSettings = mongoose.model("GeneralSettings", GeneralSettingsSchema);

module.exports = GeneralSettings;
