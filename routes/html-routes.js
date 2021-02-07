const path = require("path");
const router = require("express").Router();

//* path for index page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//* path for add exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//* path for update exercise 
router.get("/exercise?", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//* path for stats.html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
