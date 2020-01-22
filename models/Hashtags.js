const mongoose = require("mongoose");

const HashtagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("hashtag", HashtagSchema);
