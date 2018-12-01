const mongoose = require("mongoose");

let resumeSchema = new mongoose.Schema({
  googleId: String,
  googleName: String,
  avatarURL: String,
  userName: String,
  password: String,
  resume: {
    contact: {
      name: String,
      title: String,
      summary: String,
      phone: String,
      email: {type: String, require: true, unique:true},
      githubURL: String,
      linkedinURL: String,
      webpageURL: String, 
    },
    experience: [{
      company_name: String,
      startMonth: Number,
      startYear: Number,
      endMonth: Number,
      endYear: Number,
      current: Boolean,
      title: String,
      location: String,
      description: String
    }],
    education: [{
      school_name: String,
      major: String,
      startMonth: Number,
      startYear: Number,
      endMonth: Number,
      endYear: Number,
      current: Boolean,
    }],
    skill: [String],
    created: {
      type: Date,
      default: Date.now
    },
    project: [{
      name: String,
      description: String,
      imageUrl: String,
      startMonth: Number,
      startYear: Number,
      endMonth: Number,
      endYear: Number,
      current: Boolean,
      web: String
    }]
  }
});

var Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
