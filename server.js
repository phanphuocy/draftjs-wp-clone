const express = require("express");

// Require connectDB callback function
const connectDB = require("./config/db");

const app = express();

// Calling mongoDB connection
connectDB();

// Init body-parser
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/posts", require("./routes/posts"));
// app.use("/api/hashtags", require("./routes/hashtags"));

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
