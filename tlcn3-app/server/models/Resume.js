let Experience = require("./Experience");
let Education = require("./Education");
let Project = require("./Project");

Resume ={
  title: String,
  summary: String,
  githubURL: String,
  linkedinURL: String,
  website: String,
  experience: [{ experience: Experience }],
  education: [{ education: Education }],
  project: [{ project: Project }],
  skill: [String],
  created: {
    type: Date,
    default: Date.now
  }
};
module.exports = Resume;
