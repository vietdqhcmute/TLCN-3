const mongoose = require("mongoose");

let passwordSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true
  },
  password: String,
  role: Number
});

const Password = mongoose.model("Password", passwordSchema);
module.exports = Password;
