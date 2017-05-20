var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var activitySchema = new Schema({
  location_From: {
    type: String,
    enum: dv.location,
    required: true
  },
  location_To: {
    type: String,
    enum: dv.location,
    required: true
  },
  activity_Name: {
    type: String,
    enum: dv.activity,
    required: true
  },
  meta_Notes: {
    type: String
  },
  timestamp: {
    type: String
  }
});

var ActivityModel = mongoose.model('Activity', activitySchema);
console.log("Building + Exporting Mongoose MODEL: ActivityModel");
module.exports = ActivityModel;
