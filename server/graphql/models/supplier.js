var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supplierSchema = new Schema({
    name: String,
    description: String,
});

supplierSchema.methods.getSupplierList = function() {
     return Supplier.find();
}

var Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier; 