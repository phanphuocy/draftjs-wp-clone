const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  dateCreated: {
    type: String,
    default: Date.now
  },
  dateUpdated: String,
  status: {
    type: String,
    required: true
  },
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hashtags"
    }
  ]
});

module.exports = mongoose.model("post", PostSchema);
