const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/tic_tac_toe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});
