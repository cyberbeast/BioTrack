var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var idSchema = new Schema({
  id_VdhVsapImportationAppNumber: String,
  id_SupplierSubject: String,
});

var IdModel = mongoose.model('Id', idSchema);
console.log("Building + Exporting Mongoose MODEL: IdModel");
module.exports = IdModel;
