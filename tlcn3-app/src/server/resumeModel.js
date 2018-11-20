const mongoose = require("mongoose");

let resumeSchema = new mongoose.Schema({
  googleId: String,
  googleName: String,
  avatarURL: String,
  resume: {
    contact: {
      name: String,
      title: String,
      summary: String,
      phone: String,
      email: String,
      social: [{
        network: String,
        url: String
      }]
    },
    experience: [{
      company_name: String,
      startDate: {
        month: Number,
        year: Number
      },
      endDate: {
        month: Number,
        year: Number
      },
      current: Boolean,
      title: String,
      location: String,
      description: String
    }],
    education: [{
      school_name: String,
      major: String,
      startDate: {
        month: Number,
        year: Number
      },
      endDate: {
        month: Number,
        year: Number
      },
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
      startDate: {
        month: Number,
        year: Number
      },
      endDate: {
        month: Number,
        year: Number
      },
      current: Boolean,
      web: String
    }]
  }
});

var Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
