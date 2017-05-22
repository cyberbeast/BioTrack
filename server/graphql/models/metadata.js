var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var metadataSchema = new Schema({
  meta_Gender: {
      type: String,
      enum: dv.gender
  },
  meta_Race: {
      type: String,
      enum: dv.race
  },
  meta_Age: Number,
  meta_CauseOfDeath: String,
  meta_AshStatus: {
      type: String,
      enum: dv.ash_status
  },
  meta_Disposition: {
      type: String,
      enum: dv.disposition
  },
  meta_usage: {
      type: String,
      enum: dv.usage
  }
});

var MetadataModel = mongoose.model('Metadata', metadataSchema);
console.log("Building + Exporting Mongoose MODEL: MetadataModel");
module.exports = MetadataModel;
