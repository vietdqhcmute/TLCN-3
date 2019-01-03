const mongoose = require("mongoose");

let newFeedSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String,
    required: true
  },

});

var NewFeed = mongoose.model("Notify", newFeedSchema);
module.exports = NewFeed;
