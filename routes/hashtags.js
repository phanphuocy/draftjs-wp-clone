const express = require("express");

const { check, validationResult } = require("express-validator");
const slugify = require("slugify");

const Hashtag = require("../models/Hashtags");

const router = express.Router();

// @route     GET /api/hashtags
// @desc      GET all hashtags, used for display in admin
router.get("/", async (req, res) => {
  try {
    const hashtags = await Hashtag.find({});
    res.json(hashtags);
  } catch (err) {
    console.log("ROUTER GET POSTS ERROR:", err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST /api/hashtags
// @desc      Make a new hashtag
router.post(
  "/",
  [
    check("name", "No name provided")
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
    const name = req.body.name;
    const slug = slugify(name, {
      replacement: "-", // replace spaces with replacement
      lower: true // result in lower case
    });
    const posts = req.body.posts;
    //
    try {
      const newTag = new Hashtag({
        name,
        slug,
        posts
      });
      const tag = await newTag.save();
      res.status(200).json(tag);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

// @route     PUT /api/hashtags/:id
// @desc      Update a hashtag from a id
router.put(
  "/:id",
  [
    check("name", "No name provided")
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
    //
    const slug = slugify(req.body.name, {
      replacement: "-", // replace spaces with replacement
      lower: true // result in lower case
    });
    //
    const newHashtag = {
      name: req.body.name,
      slug,
      posts: req.body.posts
    };
    try {
      Hashtag.findByIdAndUpdate(id, newHashtag, (err, foundTag) => {
        if (err) {
          console.log(err);
          res.status(500).send("Server Error");
        }
        res.status(200).json(foundTag);
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE /api/hashtags/:id
// @desc     Delete a hastag
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Hashtag.findByIdAndDelete(id, (err, post) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
    res.status(200).json(post);
  });
});
module.exports = router;
