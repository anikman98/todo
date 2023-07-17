const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {
  const todo = req.body.todo;
  const newTodo = new Todo({ todo });

  newTodo
    .save()
    .then(() => {
      console.log("Saved the data");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
  //   console.log(todo);
});

router.post("/edit/todo/:_id", async (req, res) => {
  try {
    // const {_id} = req.params;
    // let todo = await Todo.findOne({_id});
    Todo.findOneAndUpdate({ _id: req.params._id }, req.body)
      .then(() => {
        console.log("Data updated!");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(todo);
  } catch (err) {
    console.log(err);
  }
});

router.get("/delete/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id })
    .then(() => {
      console.log("Deleted successfully");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
