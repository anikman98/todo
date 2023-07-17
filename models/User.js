const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "User already exists"],
    lowercase: true,
    validate: [isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

userSchema.post('save')

const User = mongoose.model("user", userSchema);

module.exports = User;
