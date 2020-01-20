const mongoose = require("mongoose");

const HashtagSchema = mongoose.Schema({
  name: String,
  slug: String,
  url: String,
  posts: [
    {
      postId: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

module.exports = mongoose.model("hashtag", HashtagSchema);
