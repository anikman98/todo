const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const todoRoutes = require("./routes/todo");
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const { checkUser } = require("./middleware/authMiddleware");

const app = express();

// mongoose.connect("mongodb://0.0.0.0:27017/tic_tac_toe", {
mongoose.connect(
  "mongodb+srv://anikman98:dpgFRQfjyhqhNM2Y@todo.txbo0zw.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");

//routes
app.get("*", checkUser);

app.use(indexRoutes);
app.use(todoRoutes);
app.use(authRoutes);

// app.get('/set-cookies', (req, res) => {
//   res.setHeader('Set-Cookie', 'newUser=true');

//   res.send('you got the cookies');
// })

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});
