const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  // Required fields
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["published", "draft", "trashed"],
    required: true
  },
  // Server side generated
  dateCreated: {
    type: String,
    default: Date.now
  },
  dateUpdated: String,
  //
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hashtag"
    }
  ]
});

module.exports = mongoose.model("post", PostSchema);
