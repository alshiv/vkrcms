const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    requier: true,
  },
  role: {
    type: String,
    default: "basic",
    enum: ["basic", "supervisor", "admin"],
  },
  is_active: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  activated_date: {
    type: Date,
  },
  accessToken: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
