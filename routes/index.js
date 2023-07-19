const router = require("express").Router();
const Todo = require("../models/Todo");
//
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
