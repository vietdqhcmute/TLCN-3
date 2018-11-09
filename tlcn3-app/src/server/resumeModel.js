const mongoose = require("mongoose");

let resumeSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  facebookLogin: {
    idFacebook: {
      type: String
    },
    facebookName: {
      type: String
    },
    avatarURL: {
      type: String
    }
  },
  resume: [{
    contact: {
      name: String,
      title: String,
      summary: String,
      phone: String,
      email: String,
      social: [{
        type: String,
        url: String
      }]
    },
    experience: [{
      company_name: String,
      startDate: {
        month: Number,
        year: Number
      },
      endDate  : {
        month: Number,
        year: Number
      },
      current: Boolean,
      title: String,
      location: String,
      description  : [String]
    }],
    education: [{
      school: String,
      major: String,
      startDate: {
        month: Number,
        year: Number
      },
      endDate  : {
        month: Number,
        year: Number
      },
      current  : Boolean,
    }],
    skill: [String],
    created: {
      type: Date,
      default: Date.now
    },
    project: [{
      name: String,
      description: String,
      imageUrl  : String,
      startDate: {
        month: Number,
        year: Number
      },
      endDate  : {
        month: Number,
        year: Number
      },
      current  : Boolean,
      web  : String
    }]
  }],

});

var ResumeModel = mongoose.model("ResumeModel", resumeSchema);

module.exports = ResumeModel;
