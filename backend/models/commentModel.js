const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pageId: {
    type: Number,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  detail: {
    type: String,
    required: false,
  },
  author: {
      type: String,
      required: true
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

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
