const express = require("express");

const { check, validationResult } = require("express-validator");

const Post = require("../models/Posts");

const router = express.Router();

// @route    POST api/posts
// @desc     Post a new post
router.post(
  "/",
  [
    check("title", "No title provided")
      .not()
      .isEmpty(),
    check("content", "No content provided")
      .not()
      .isEmpty(),
    check("status", "No status provided")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    //
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    //
    const { title, content, status } = req.body;
    //
    try {
      const newPost = new Post({
        title,
        content,
        status
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error("ROUTE POST NEW POST ERROR:", err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/posts
// @desc     Get all posts available
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("hashtags")
      .sort({ dateCreated: -1 });
    res.json(posts);
  } catch (err) {
    console.log("ROUTER GET POSTS ERROR:", err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/:id
// @desc     Update a post metadata and content
router.put(
  "/:id",
  [
    check("title", "No title provided")
      .not()
      .isEmpty(),
    check("content", "No content provided")
      .not()
      .isEmpty(),
    check("status", "No status provided")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    //
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    //
    const id = req.params.id;
    const newPost = { ...req.body, dateUpdated: Date.now() };
    try {
      Post.findByIdAndUpdate(id, newPost, (err, post) => {
        if (err) {
          console.log(err);
          res.status(500).send("Server Error");
        }
        res.status(200).json(post);
      });
    } catch (err) {
      console.log("ROUTER PUT POSTS ERROR:", err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/posts/:id
// @desc     Delete a post
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
    res.status(200).json(post);
  });
});

module.exports = router;
