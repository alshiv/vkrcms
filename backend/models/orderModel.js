const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: false,
  },
  image: {
      type: String,
      required: false
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  changed_date: {
    type: Date,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
