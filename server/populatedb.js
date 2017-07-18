import mongoose from 'mongoose';
import casual from 'casual';
import _ from 'lodash';
var waterfall = require('async-waterfall');

// Import mongoose models
import SupplierModel from './graphql/models/supplier';
import SubjectModel from './graphql/models/subject';
import MeasurementModel from './graphql/models/measurement';
import MetadataModel from './graphql/models/metadata';
import IdModel from './graphql/models/id';
import ActivityModel from './graphql/models/activity';

// Import default values file
const dv = require('./graphql/defaultValues.json');

// Import config file
const config = require('./config.json');

// Set casual seed to reproduce and control "random" data on each execution.
casual.seed(123);

// Connect to the database
const mongo = mongoose.connect(config.DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB: connection error'));

// Upon successful connection to DB, generate and populate DB with random data.
db.once('open', function() {
    console.log("DB: Connected to Database");
    const activity_count = 5;
    const subject_count = 150;
    waterfall([
      function(callback){
        console.log("Generating Suppliers...");
        var supplier_ids = [];

        for (var i=0; i<dv.suppliers.length; i++) {
          new SupplierModel({
            name: dv.suppliers[i],
            description: casual.short_description
          }).save().then((supplier) => {
            console.log( supplier.id + "\t -> \t supplier ");
            supplier_ids.push(supplier.id);

            if (supplier_ids.length === dv.suppliers.length) {
              callback(null, supplier_ids);
            }
          });
        }
      },
      function(suppliers, callback){
        for (var i=0; i<subject_count; i++){
          waterfall([
            function(cb){
              var activity_log_ids = [];

              _.times(activity_count, () => {
                return new ActivityModel({
                  location_From: casual.random_element(dv.location),
                  location_To: casual.random_element(dv.location),
                  activity_Name: casual.random_element(dv.activity),
                  meta_Notes: casual.short_description,
                  timestamp: casual.word
                }).save().then((activity) => {
                  console.log(activity.id + "\t -> \t activity");
                  activity_log_ids.push(activity.id);

                  if (activity_log_ids.length === activity_count){
                    cb(null, activity_log_ids);
                  }
                });
              });
            },
            function(activity_log_ids, cb){
              var supplier_id = casual.random_element(suppliers);
              cb(null, activity_log_ids, supplier_id);
            },
            function(activity_log_ids, supplier_id, cb){
              var measurement_id = "";

              new MeasurementModel({
                measurement_Height: casual.double(0, 1000),
                measurement_Weight: casual.double( 0, 1000),
                measurement_Shoulder_Acromial_Height: casual.double( 0, 1000),
                measurement_Vertex_to_Symphision_Length: casual.double( 0, 1000),
                measurement_Waist_Height_Umbilicus: casual.double( 0, 1000),
                measurement_Waist_Depth_Umbilicus: casual.double( 0, 1000),  
                measurement_Waist_Breadth: casual.double( 0, 1000),
                measurement_Shoulder_Breadth_Biacromial: casual.double( 0, 1000),  
                measurement_Chest_Breadth_4th_Rib: casual.double( 0, 1000),
                measurement_Chest_Breadth_8th_Rib: casual.double( 0, 1000),
                measurement_Chest_Depth_4th_Rib: casual.double( 0, 1000),
                measurement_Chest_Depth_8th_Rib: casual.double( 0, 1000),
                measurement_Seated_Chest_Breadth_4th_Rib: casual.double( 0, 1000),
                measurement_Seated_Chest_Breadth_8th_Rib: casual.double( 0, 1000),
                measurement_Seated_Chest_Depth_4th_Rib: casual.double( 0, 1000),
                measurement_Seated_Chest_Depth_8th_Rib: casual.double( 0, 1000),
                measurement_Buttock_Depth: casual.double( 0, 1000),
                measurement_Interscye_Across_Back: casual.double( 0, 1000),
                measurement_Hip_Breadth: casual.double( 0, 1000),
                measurement_Shoulder_to_Elbow: casual.double( 0, 1000),
                measurement_Forearm_to_Hand: casual.double( 0, 1000),
                measurement_Tibiale_Height: casual.double( 0, 1000),
                measurement_Ankle_Height_Outside: casual.double( 0, 1000),  
                measurement_Foot_Breadth: casual.double( 0, 1000),
                measurement_Foot_Length: casual.double( 0, 1000),
                measurement_Top_of_Head_to_Trochacterion: casual.double( 0, 1000),
                measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: casual.double( 0, 1000),
                measurement_Seated_Head_to_Buttock: casual.double( 0, 1000),
                measurement_Seated_Knee_Height: casual.double( 0, 1000),
                measurement_Seated_Hip_to_Knee_Length: casual.double( 0, 1000),
                measurement_Head_Length: casual.double( 0, 1000),  
                measurement_Head_Breadth: casual.double( 0, 1000),  
                measurement_Head_Height: casual.double( 0, 1000),  
                measurement_Head_Circumference: casual.double( 0, 1000),  
                measurement_Bicep_Circumference: casual.double( 0, 1000),
                measurement_Elbow_Circumference: casual.double( 0, 1000),  
                measurement_Forearm_Circumference: casual.double( 0, 1000),  
                measurement_Wrist_Circumference: casual.double( 0, 1000),  
                measurement_Thigh_Circumference: casual.double( 0, 1000),
                measurement_Lower_Thigh_Circumference: casual.double( 0, 1000),  
                measurement_Knee_Circumference: casual.double( 0, 1000),  
                measurement_Calf_Circumference: casual.double( 0, 1000),  
                measurement_Ankle_Circumference: casual.double( 0, 1000),
                measurement_Neck_Circumference: casual.double( 0, 1000),  
                measurement_Scye_Armpit_Circumference: casual.double( 0, 1000),  
                measurement_Chest_Circumference_4th_Rib: casual.double( 0, 1000),  
                measurement_Chest_Circumference_8th_Rib: casual.double( 0, 1000),  
                measurement_Seated_Chest_Circumference_4th_Rib: casual.double( 0, 1000),  
                measurement_Seated_Chest_Circumference_8th_Rib: casual.double( 0, 1000),  
                measurement_Waist_Circumference_At_Umbilicus: casual.double( 0, 1000),  
                measurement_8cm_Above_Umbilicus: casual.double( 0, 1000),
                measurement_8cm_Below_Umbilicus: casual.double( 0, 1000),  
                measurement_Buttock_Circumference: casual.double( 0, 1000),  
                measurement_Seated_Surface_to_T1: casual.double( 0, 1000),
                measurement_Top_of_Head_to_T1: casual.double( 0, 1000)
              }).save().then((measurement) => {
                console.log( measurement.id + "\t -> \t measurement ");
                measurement_id = measurement.id;
                cb(null, activity_log_ids, supplier_id, measurement_id);
              });
            },
            function(activity_log_ids, supplier_id, measurement_id, cb){
              // console.log("\t* METADATA");

              var metadata_id = "";

              new MetadataModel({
                meta_Gender: casual.random_element(dv.gender),
                meta_Race: casual.random_element(dv.race),
                meta_Age: casual.integer(0, 150),
                meta_CauseOfDeath: casual.sentence,
                meta_AshStatus: casual.random_element(dv.ash_status),
                meta_Disposition: casual.random_element(dv.disposition),
                meta_Usage: casual.random_element(dv.usage)
              }).save().then((metadata) => {
                console.log( metadata.id + "\t -> \t metadata ");
                metadata_id = metadata.id;
                cb(null, activity_log_ids, supplier_id, measurement_id, metadata_id);
              });
            },
            function(activity_log_ids, supplier_id, measurement_id, metadata_id, cb){
              // console.log("\t* IDENTIFICATIONS");
              var identification_id = "";

              new IdModel({
                id_VdhVsapImportationAppNumber: casual.uuid,
                id_SupplierSubject: casual.uuid
              }).save().then((identification) => {
                console.log( identification.id + "\t -> \t identification ");
                identification_id = identification.id;
                cb(null, activity_log_ids, supplier_id, measurement_id, metadata_id, identification_id);
              });
            },
            function(activity_log_ids, supplier_id, measurement_id, metadata_id, identification_id, cb){
              // console.log("\t* SUBJECT");
              var subject_id = "";

              new SubjectModel({
                identifications: identification_id,
                metadata: metadata_id,
                measurements: measurement_id,
                supplier: supplier_id,
                activity_log: activity_log_ids,
                notes: casual.short_description
              }).save().then((subject) => {
                console.log( subject.id + "\t -> \t subject ");
                subject_id = subject.id;
                cb(null, 0);
              });
            },
          ], function (err, result) {
            // console.log("\t\tDONE");
            // result now equals 'done'
          });
        }
      }
    ], function (err, result) {
      // console.log("\t\tDONE");
      // result now equals 'done'
      exit();
    })

    // for (var i=0; i<subject_count; i++){
    //   waterfall([
    //     function(callback){
    //       // console.log("\t* ACTIVITIES");
    //
    //       var activity_log_ids = [];
    //
    //       _.times(activity_count, () => {
    //         return new ActivityModel({
    //           location_From: casual.random_element(dv.location),
    //           location_To: casual.random_element(dv.location),
    //           activity_Name: casual.random_element(dv.activity),
    //           meta_Notes: casual.short_description,
    //           timestamp: casual.word
    //         }).save().then((activity) => {
    //           console.log(activity.id + "\t -> \t activity");
    //           activity_log_ids.push(activity.id);
    //
    //           if (activity_log_ids.length === activity_count){
    //             callback(null, activity_log_ids);
    //           }
    //         });
    //       });
    //       // console.log( activity_log_ids);
    //          // + "\t -> \t Consolidated "
    //     },
    //     function(activity_log_ids, callback){
    //       var supplier_id = casual.random_element(supplier_ids)
    //         callback(null, activity_log_ids, supplier_id);
    //     },
    //     function(activity_log_ids, supplier_id, callback){
    //       // console.log("\t* MEASUREMENTS");
    //       var measurement_id = "";
    //
    //       new MeasurementModel({
    //         measurement_Height: casual.double(0, 1000),
    //         measurement_Weight: casual.double( 0, 1000),
    //         measurement_Shoulder_Acromial_Height: casual.double( 0, 1000),
    //         measurement_Vertex_to_Symphision_Length: casual.double( 0, 1000),
    //         measurement_Waist_Height_Umbilicus: casual.double( 0, 1000),
    //         measurement_Waist_Depth_Umbilicus: casual.double( 0, 1000),  
    //         measurement_Waist_Breadth: casual.double( 0, 1000),
    //         measurement_Shoulder_Breadth_Biacromial: casual.double( 0, 1000),  
    //         measurement_Chest_Breadth_4th_Rib: casual.double( 0, 1000),
    //         measurement_Chest_Breadth_8th_Rib: casual.double( 0, 1000),
    //         measurement_Chest_Depth_4th_Rib: casual.double( 0, 1000),
    //         measurement_Chest_Depth_8th_Rib: casual.double( 0, 1000),
    //         measurement_Seated_Chest_Breadth_4th_Rib: casual.double( 0, 1000),
    //         measurement_Seated_Chest_Breadth_8th_Rib: casual.double( 0, 1000),
    //         measurement_Seated_Chest_Depth_4th_Rib: casual.double( 0, 1000),
    //         measurement_Seated_Chest_Depth_8th_Rib: casual.double( 0, 1000),
    //         measurement_Buttock_Depth: casual.double( 0, 1000),
    //         measurement_Interscye_Across_Back: casual.double( 0, 1000),
    //         measurement_Hip_Breadth: casual.double( 0, 1000),
    //         measurement_Shoulder_to_Elbow: casual.double( 0, 1000),
    //         measurement_Forearm_to_Hand: casual.double( 0, 1000),
    //         measurement_Tibiale_Height: casual.double( 0, 1000),
    //         measurement_Ankle_Height_Outside: casual.double( 0, 1000),  
    //         measurement_Foot_Breadth: casual.double( 0, 1000),
    //         measurement_Foot_Length: casual.double( 0, 1000),
    //         measurement_Top_of_Head_to_Trochacterion: casual.double( 0, 1000),
    //         measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: casual.double( 0, 1000),
    //         measurement_Seated_Head_to_Buttock: casual.double( 0, 1000),
    //         measurement_Seated_Knee_Height: casual.double( 0, 1000),
    //         measurement_Seated_Hip_to_Knee_Length: casual.double( 0, 1000),
    //         measurement_Head_Length: casual.double( 0, 1000),  
    //         measurement_Head_Breadth: casual.double( 0, 1000),  
    //         measurement_Head_Height: casual.double( 0, 1000),  
    //         measurement_Head_Circumference: casual.double( 0, 1000),  
    //         measurement_Bicep_Circumference: casual.double( 0, 1000),
    //         measurement_Elbow_Circumference: casual.double( 0, 1000),  
    //         measurement_Forearm_Circumference: casual.double( 0, 1000),  
    //         measurement_Wrist_Circumference: casual.double( 0, 1000),  
    //         measurement_Thigh_Circumference: casual.double( 0, 1000),
    //         measurement_Lower_Thigh_Circumference: casual.double( 0, 1000),  
    //         measurement_Knee_Circumference: casual.double( 0, 1000),  
    //         measurement_Calf_Circumference: casual.double( 0, 1000),  
    //         measurement_Ankle_Circumference: casual.double( 0, 1000),
    //         measurement_Neck_Circumference: casual.double( 0, 1000),  
    //         measurement_Scye_Armpit_Circumference: casual.double( 0, 1000),  
    //         measurement_Chest_Circumference_4th_Rib: casual.double( 0, 1000),  
    //         measurement_Chest_Circumference_8th_Rib: casual.double( 0, 1000),  
    //         measurement_Seated_Chest_Circumference_4th_Rib: casual.double( 0, 1000),  
    //         measurement_Seated_Chest_Circumference_8th_Rib: casual.double( 0, 1000),  
    //         measurement_Waist_Circumference_At_Umbilicus: casual.double( 0, 1000),  
    //         measurement_8cm_Above_Umbilicus: casual.double( 0, 1000),
    //         measurement_8cm_Below_Umbilicus: casual.double( 0, 1000),  
    //         measurement_Buttock_Circumference: casual.double( 0, 1000),  
    //         measurement_Seated_Surface_to_T1: casual.double( 0, 1000),
    //         measurement_Top_of_Head_to_T1: casual.double( 0, 1000)
    //       }).save().then((measurement) => {
    //         console.log( measurement.id + "\t -> \t measurement ");
    //         measurement_id = measurement.id;
    //         callback(null, activity_log_ids, supplier_id, measurement_id);
    //       });
    //     },
    //     function(activity_log_ids, supplier_id, measurement_id, callback){
    //       // console.log("\t* METADATA");
    //
    //       var metadata_id = "";
    //
    //       new MetadataModel({
    //         meta_Gender: casual.random_element(dv.gender),
    //         meta_Race: casual.random_element(dv.race),
    //         meta_Age: casual.integer(0, 150),
    //         meta_CauseOfDeath: casual.sentence,
    //         meta_AshStatus: casual.random_element(dv.ash_status),
    //         meta_Disposition: casual.random_element(dv.disposition),
    //         meta_Usage: casual.random_element(dv.usage)
    //       }).save().then((metadata) => {
    //         console.log( metadata.id + "\t -> \t metadata ");
    //         metadata_id = metadata.id;
    //         callback(null, activity_log_ids, supplier_id, measurement_id, metadata_id);
    //       });
    //     },
    //     function(activity_log_ids, supplier_id, measurement_id, metadata_id, callback){
    //       // console.log("\t* IDENTIFICATIONS");
    //       var identification_id = "";
    //
    //       new IdModel({
    //         id_VdhVsapImportationAppNumber: casual.uuid,
    //         id_SupplierSubject: casual.uuid
    //       }).save().then((identification) => {
    //         console.log( identification.id + "\t -> \t identification ");
    //         identification_id = identification.id;
    //         callback(null, activity_log_ids, supplier_id, measurement_id, metadata_id, identification_id);
    //       });
    //     },
    //     function(activity_log_ids, supplier_id, measurement_id, metadata_id, identification_id, callback){
    //       // console.log("\t* SUBJECT");
    //       var subject_id = "";
    //
    //       new SubjectModel({
    //         identifications: identification_id,
    //         metadata: metadata_id,
    //         measurements: measurement_id,
    //         supplier: supplier_id,
    //         activity_log: activity_log_ids,
    //         notes: casual.short_description
    //       }).save().then((subject) => {
    //         console.log( subject.id + "\t -> \t subject ");
    //         subject_id = subject.id;
    //         callback(null, 0);
    //       });
    //     },
    //   ], function (err, result) {
    //     // console.log("\t\tDONE");
    //     // result now equals 'done'
    //   });
    // }

    // _.times(5, () => {
    //     return new SupplierModel({
            // name: casual.name,
            // description: casual.short_description
    //     }).save().then((supplier) => {
    //             console.log("Added Supplier: " + supplier.id);
    //
    //             _.times(10, () => {
    //                 return new SubjectModel({
                        // id_VdhVsapImportationAppNumber: casual.word,
                        // id_SupplierSubject: casual.word,
                        // supplier: supplier.id,
                        // meta_Gender: casual.random_element(dv.gender),
                        // meta_Race: casual.random_element(dv.race),
                        // meta_Age: casual.integer(0, 150),
                        // meta_CauseOfDeath: casual.sentence,
                        // meta_AshStatus: casual.random_element(dv.ash_status),
                        // meta_Disposition: casual.random_element(dv.disposition),
                        // meta_Usage: casual.random_element(dv.usage),
                        // notes: casual.text,
                        // measurement_Height: casual.integer(),
                        // measurement_Weight: casual.integer(),
                        // measurement_Shoulder_Acromial_Height: casual.integer(),
                        // measurement_Vertex_to_Symphision_Length: casual.integer(),
                        // measurement_Waist_Height_Umbilicus: casual.integer(),
                        // measurement_Waist_Depth_Umbilicus: casual.integer(),  
                        // measurement_Waist_Breadth: casual.integer(),
                        // measurement_Shoulder_Breadth_Biacromial: casual.integer(),  
                        // measurement_Chest_Breadth_4th_Rib: casual.integer(),
                        // measurement_Chest_Breadth_8th_Rib: casual.integer(),
                        // measurement_Chest_Depth_4th_Rib: casual.integer(),
                        // measurement_Chest_Depth_8th_Rib: casual.integer(),
                        // measurement_Seated_Chest_Breadth_4th_Rib: casual.integer(),
                        // measurement_Seated_Chest_Breadth_8th_Rib: casual.integer(),
                        // measurement_Seated_Chest_Depth_4th_Rib: casual.integer(),
                        // measurement_Seated_Chest_Depth_8th_Rib: casual.integer(),
                        // measurement_Buttock_Depth: casual.integer(),
                        // measurement_Interscye_Across_Back: casual.integer(),
                        // measurement_Hip_Breadth: casual.integer(),
                        // measurement_Shoulder_to_Elbow: casual.integer(),
                        // measurement_Forearm_to_Hand: casual.integer(),
                        // measurement_Tibiale_Height: casual.integer(),
                        // measurement_Ankle_Height_Outside: casual.integer(),  
                        // measurement_Foot_Breadth: casual.integer(),
                        // measurement_Foot_Length: casual.integer(),
                        // measurement_Top_of_Head_to_Trochacterion: casual.integer(),
                        // measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: casual.integer(),
                        // measurement_Seated_Head_to_Buttock: casual.integer(),
                        // measurement_Seated_Knee_Height: casual.integer(),
                        // measurement_Seated_Hip_to_Knee_Length: casual.integer(),
                        // measurement_Head_Length: casual.integer(),  
                        // measurement_Head_Breadth: casual.integer(),  
                        // measurement_Head_Height: casual.integer(),  
                        // measurement_Head_Circumference: casual.integer(),  
                        // measurement_Bicep_Circumference: casual.integer(),
                        // measurement_Elbow_Circumference: casual.integer(),  
                        // measurement_Forearm_Circumference: casual.integer(),  
                        // measurement_Wrist_Circumference: casual.integer(),  
                        // measurement_Thigh_Circumference: casual.integer(),
                        // measurement_Lower_Thigh_Circumference: casual.integer(),  
                        // measurement_Knee_Circumference: casual.integer(),  
                        // measurement_Calf_Circumference: casual.integer(),  
                        // measurement_Ankle_Circumference: casual.integer(),
                        // measurement_Neck_Circumference: casual.integer(),  
                        // measurement_Scye_Armpit_Circumference: casual.integer(),  
                        // measurement_Chest_Circumference_4th_Rib: casual.integer(),  
                        // measurement_Chest_Circumference_8th_Rib: casual.integer(),  
                        // measurement_Seated_Chest_Circumference_4th_Rib: casual.integer(),  
                        // measurement_Seated_Chest_Circumference_8th_Rib: casual.integer(),  
                        // measurement_Waist_Circumference_At_Umbilicus: casual.integer(),  
                        // measurement_8cm_Above_Umbilicus: casual.integer(),
                        // measurement_8cm_Below_Umbilicus: casual.integer(),  
                        // measurement_Buttock_Circumference: casual.integer(),  
                        // measurement_Seated_Surface_to_T1: casual.integer(),
                        // measurement_Top_of_Head_to_T1: casual.integer()
    //                 }).save().then((subject) => {
    //                     console.log("\tSUPPLIER: " + supplier.id + "\t---> \tSUBJECT: " + subject.id);
    //                 });
    //             });
    //         });
    // });
});
