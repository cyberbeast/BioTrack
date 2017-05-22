var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var subjectSchema = new Schema({
  identifications: Schema.Types.ObjectId,
  metadata: Schema.Types.ObjectId,
  measurements: Schema.Types.ObjectId,
  supplier: Schema.Types.ObjectId,
  activity_log: [Schema.Types.ObjectId],
  notes: String
});

var SubjectModel = mongoose.model('Subject', subjectSchema);
console.log("Building + Exporting Mongoose MODEL: SubjectModel");
module.exports = SubjectModel;
