import ActivityModel from '../models/activity';
import IdModel from '../models/id';
import MeasurementModel from '../models/measurement';
import MetadataModel from '../models/metadata';
import SubjectModel from '../models/subject';
import SupplierModel from '../models/supplier';
const ObjectId = require('mongoose').Types.ObjectId;

console.log("Exporting Resolvers for: Supplier");
export const supplierResolvers = {

  RootQuery: {
    getSuppliers() {
      return SupplierModel.find().then((res) => res);
    },

    getSupplierInfoById(_, args) {
      return SupplierModel.findById(args.id).then((res) => res);
    },

    getSupplierInfoByName(_, args) {
      SupplierModel.find({
        name: args.name
      }).then((res) => {
        console.log(res);
      });

      return SupplierModel.find({
        name: args.name
      }).then((res) => res[0]);
    }
  },

  Supplier: {
    subjects(_) {
      return SubjectModel.find({
        supplier: _._id
      }).then((res) => res);
    }
  }

};
