var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var componentSchema = new Schema({
  name: {
    type: String,
    enum: dv.component_list,
    required: true,
    unique: true
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
  }
});

var ComponentModel = mongoose.model('Component', componentSchema);
console.log('Building + Exporting Mongoose MODEL: ComponentModel');
module.exports = ComponentModel;
