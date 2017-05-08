import mongoose from 'mongoose';
import casual from 'casual';
import SupplierModel from './server/graphql/models/supplier';
import SubjectModel from './server/graphql/models/subject';
import _ from 'lodash';
const dv = require('./server/graphql/defaultValues.json');



const config = require('./config.json');
const mongo = mongoose.connect(config.DB_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB: connection error'));

casual.seed(123);

db.once('open', function() {
    console.log("DB: Connected to Database");

    _.times(5, () => {
        return new SupplierModel({
            name: casual.name,
            description: casual.short_description
        }).save().then((supplier) => {
                console.log("Added Supplier: " + supplier.id);

                _.times(10, () => {
                    return new SubjectModel({
                        id_VdhVsapImportationAppNumber: casual.word,
                        id_SupplierSubject: casual.word,
                        supplier: supplier.id,
                        meta_Gender: casual.random_element(dv.gender),
                        meta_Race: casual.random_element(dv.race),
                        meta_Age: casual.integer(0, 150),
                        meta_CauseOfDeath: casual.sentence,
                        meta_AshStatus: casual.random_element(dv.ash_status),
                        meta_Disposition: casual.random_element(dv.disposition),
                        meta_Usage: casual.random_element(dv.usage),
                        notes: casual.text,
                        measurement_Height: casual.integer(),
                        measurement_Weight: casual.integer(),
                        measurement_Shoulder_Acromial_Height: casual.integer(),
                        measurement_Vertex_to_Symphision_Length: casual.integer(),
                        measurement_Waist_Height_Umbilicus: casual.integer(),
                        measurement_Waist_Depth_Umbilicus: casual.integer(),  
                        measurement_Waist_Breadth: casual.integer(),
                        measurement_Shoulder_Breadth_Biacromial: casual.integer(),  
                        measurement_Chest_Breadth_4th_Rib: casual.integer(),
                        measurement_Chest_Breadth_8th_Rib: casual.integer(),
                        measurement_Chest_Depth_4th_Rib: casual.integer(),
                        measurement_Chest_Depth_8th_Rib: casual.integer(),
                        measurement_Seated_Chest_Breadth_4th_Rib: casual.integer(),
                        measurement_Seated_Chest_Breadth_8th_Rib: casual.integer(),
                        measurement_Seated_Chest_Depth_4th_Rib: casual.integer(),
                        measurement_Seated_Chest_Depth_8th_Rib: casual.integer(),
                        measurement_Buttock_Depth: casual.integer(),
                        measurement_Interscye_Across_Back: casual.integer(),
                        measurement_Hip_Breadth: casual.integer(),
                        measurement_Shoulder_to_Elbow: casual.integer(),
                        measurement_Forearm_to_Hand: casual.integer(),
                        measurement_Tibiale_Height: casual.integer(),
                        measurement_Ankle_Height_Outside: casual.integer(),  
                        measurement_Foot_Breadth: casual.integer(),
                        measurement_Foot_Length: casual.integer(),
                        measurement_Top_of_Head_to_Trochacterion: casual.integer(),
                        measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: casual.integer(),
                        measurement_Seated_Head_to_Buttock: casual.integer(),
                        measurement_Seated_Knee_Height: casual.integer(),
                        measurement_Seated_Hip_to_Knee_Length: casual.integer(),
                        measurement_Head_Length: casual.integer(),  
                        measurement_Head_Breadth: casual.integer(),  
                        measurement_Head_Height: casual.integer(),  
                        measurement_Head_Circumference: casual.integer(),  
                        measurement_Bicep_Circumference: casual.integer(),
                        measurement_Elbow_Circumference: casual.integer(),  
                        measurement_Forearm_Circumference: casual.integer(),  
                        measurement_Wrist_Circumference: casual.integer(),  
                        measurement_Thigh_Circumference: casual.integer(),
                        measurement_Lower_Thigh_Circumference: casual.integer(),  
                        measurement_Knee_Circumference: casual.integer(),  
                        measurement_Calf_Circumference: casual.integer(),  
                        measurement_Ankle_Circumference: casual.integer(),
                        measurement_Neck_Circumference: casual.integer(),  
                        measurement_Scye_Armpit_Circumference: casual.integer(),  
                        measurement_Chest_Circumference_4th_Rib: casual.integer(),  
                        measurement_Chest_Circumference_8th_Rib: casual.integer(),  
                        measurement_Seated_Chest_Circumference_4th_Rib: casual.integer(),  
                        measurement_Seated_Chest_Circumference_8th_Rib: casual.integer(),  
                        measurement_Waist_Circumference_At_Umbilicus: casual.integer(),  
                        measurement_8cm_Above_Umbilicus: casual.integer(),
                        measurement_8cm_Below_Umbilicus: casual.integer(),  
                        measurement_Buttock_Circumference: casual.integer(),  
                        measurement_Seated_Surface_to_T1: casual.integer(),
                        measurement_Top_of_Head_to_T1: casual.integer()
                    }).save().then((subject) => {
                        console.log("\tSUPPLIER: " + supplier.id + "\t---> \tSUBJECT: " + subject.id);
                    });
                });
            });
    });
});
