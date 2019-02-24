let Experience = require("./Experience");
let Education = require("./Education");
let Project = require("./Project");

Resume ={
  title: String,
  summary: String,
  githubURL: String,
  linkedinURL: String,
  website: String,
  experience: [],
  education: [],
  project: [],
  skill: [String],
  created: {
    type: Date,
    default: Date.now
  }
};
module.exports = Resume;
