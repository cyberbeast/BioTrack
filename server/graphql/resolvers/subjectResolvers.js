import ActivityModel from '../models/activity';
import IdModel from '../models/id';
import MeasurementModel from '../models/measurement';
import MetadataModel from '../models/metadata';
import SubjectModel from '../models/subject';
import SupplierModel from '../models/supplier';
const ObjectId = require('mongoose').Types.ObjectId;

console.log("Exporting Resolvers for: Subject");
export const subjectResolvers = {
  RootQuery: {
    getSubjects() {
      console.log("Received request for getSubjects()");
      return SubjectModel.find().then((res) => res);
    },

    getSubjectInfoById(_, args) {
      console.log("REQUESTED: " + args.id);
      return SubjectModel.findById(args.id).then((res) => res);
    },
  },

  Subject: {
    supplier(_) {
      return SupplierModel.findById(new ObjectId(_.supplier)).then((res) => {
        // console.log(res);
        return res;
      });
    },

    identifications(_) {
      return IdModel.findById(new ObjectId(_.identifications)).then((res) => {
        console.log(typeof(res));
        return res;
      });
    },

    metadata(_) {
      return MetadataModel.findById(new ObjectId(_.metadata)).then((res) => {
        return res;
      });
    },

    measurements(_) {
      return MeasurementModel.findById(new ObjectId(_.measurements)).then((res) => {
        return res;
      });
    },

    activity_log(_) {
      console.log(_);
      var activities = [];
      // return activities
      console.log("Request for activity log: " + _.activity_log);
      // Iterate through all the activity log ids in the activity_log array and fetch the correspondong activity record.
      return ActivityModel.find({
        '_id': {
          $in: _.activity_log
        }
      }).then((res) => res);


    }
  }

};
