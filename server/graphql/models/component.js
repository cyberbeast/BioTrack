var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var componentSchema = new Schema({
  type: {
    type: String,
    enum: Object.keys(dv.component_list),
    required: true
  },
  location: {
    type: String,
    enum: dv.location,
    required: true
  },
  status: {
    type: String,
    enum: dv.status,
    required: true
  },
  notes: {
    type: String
  },
  group: {
    type: String
  }
});

var ComponentModel = mongoose.model('Component', componentSchema);
console.log('Building + Exporting Mongoose MODEL: ComponentModel');
module.exports = ComponentModel;
