var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bodySchema = new Schema({
    name: String,
    supplier: Schema.Types.ObjectId
});

var Body = mongoose.model('Body', bodySchema);
module.exports = Body;

