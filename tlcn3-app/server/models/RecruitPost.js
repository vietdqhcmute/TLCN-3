const mongoose = require("mongoose");

let recruitPostSchema = new mongoose.Schema({
  company_name: String,
  title: string,
  description: String,
  Tag: [],
  salary: String,
  created: {
    type: Date,
    default: Date.now
  }
});

const RecruitPost = mongoose.model("RecruitPost", recruitPostSchema);
module.exports = RecruitPost;
