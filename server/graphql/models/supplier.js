var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supplierSchema = new Schema({
    name: String,
    description: String,
});

supplierSchema.methods.getSupplierList = function() {
     return Supplier.find();
}

var SupplierModel = mongoose.model('Supplier', supplierSchema);
console.log("Building + Exporting Mongoose MODEL: SupplierModel");
module.exports = SupplierModel;
