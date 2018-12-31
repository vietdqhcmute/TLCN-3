const mongoose = require("mongoose");

let statisticSchema = new mongoose.Schema({
    template:{
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
      },
});

var Statistic = mongoose.model("Statistic", statisticSchema);
module.exports = Statistic;
