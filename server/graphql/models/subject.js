var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dv = require('../defaultValues.json');

var subjectSchema = new Schema({
    id_VdhVsapImportationAppNumber: String,
    id_SupplierSubject: String,
    // date_SubjectArrival: Date,
    // date_Death: Date,
    supplier: Schema.Types.ObjectId,
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
    },
    notes: String,
    measurement_Height: Number,
    measurement_Weight: Number,
    measurement_Shoulder_Acromial_Height: Number,
    measurement_Vertex_to_Symphision_Length: Number,
    measurement_Waist_Height_Umbilicus: Number,
    measurement_Waist_Depth_Umbilicus: Number,  
    measurement_Waist_Breadth: Number,
    measurement_Shoulder_Breadth_Biacromial: Number,  
    measurement_Chest_Breadth_4th_Rib: Number,
    measurement_Chest_Breadth_8th_Rib: Number,
    measurement_Chest_Depth_4th_Rib: Number,
    measurement_Chest_Depth_8th_Rib: Number,
    measurement_Seated_Chest_Breadth_4th_Rib: Number,
    measurement_Seated_Chest_Breadth_8th_Rib: Number,
    measurement_Seated_Chest_Depth_4th_Rib: Number,
    measurement_Seated_Chest_Depth_8th_Rib: Number,
    measurement_Buttock_Depth: Number,
    measurement_Interscye_Across_Back: Number,
    measurement_Hip_Breadth: Number,
    measurement_Shoulder_to_Elbow: Number,
    measurement_Forearm_to_Hand: Number,
    measurement_Tibiale_Height: Number,
    measurement_Ankle_Height_Outside: Number,  
    measurement_Foot_Breadth: Number,
    measurement_Foot_Length: Number,
    measurement_Top_of_Head_to_Trochacterion: Number,
    measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: Number,
    measurement_Seated_Head_to_Buttock: Number,
    measurement_Seated_Knee_Height: Number,
    measurement_Seated_Hip_to_Knee_Length: Number,
    measurement_Head_Length: Number,  
    measurement_Head_Breadth: Number,  
    measurement_Head_Height: Number,  
    measurement_Head_Circumference: Number,  
    measurement_Bicep_Circumference: Number,
    measurement_Elbow_Circumference: Number,  
    measurement_Forearm_Circumference: Number,  
    measurement_Wrist_Circumference: Number,  
    measurement_Thigh_Circumference: Number,
    measurement_Lower_Thigh_Circumference: Number,  
    measurement_Knee_Circumference: Number,  
    measurement_Calf_Circumference: Number,  
    measurement_Ankle_Circumference: Number,
    measurement_Neck_Circumference: Number,  
    measurement_Scye_Armpit_Circumference: Number,  
    measurement_Chest_Circumference_4th_Rib: Number,  
    measurement_Chest_Circumference_8th_Rib: Number,  
    measurement_Seated_Chest_Circumference_4th_Rib: Number,  
    measurement_Seated_Chest_Circumference_8th_Rib: Number,  
    measurement_Waist_Circumference_At_Umbilicus: Number,  
    measurement_8cm_Above_Umbilicus: Number,
    measurement_8cm_Below_Umbilicus: Number,  
    measurement_Buttock_Circumference: Number,  
    measurement_Seated_Surface_to_T1: Number,
    measurement_Top_of_Head_to_T1: Number,

});

var SubjectModel = mongoose.model('Subject', subjectSchema);
module.exports = SubjectModel;
