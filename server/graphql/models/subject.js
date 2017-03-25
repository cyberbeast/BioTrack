var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    id_VdhVsapImportationAppNumber: String,
    id_SupplierSubject: String,
    date_SubjectArrival: Date,
    date_Death: Date,
    supplier: Schema.Types.ObjectId,
    meta_Gender: String,
    meta_Race: String,
    meta_Age: Number,
    meta_CauseOfDeath: String,
    meta_AshStatus: String,
    meta_Disposition: String,
    meta_usage: String,
    notes: String,
    measurement_Height: Number,
    measurement_Weight: Number,

});

var Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

