var GraphQLDate = require('graphql-date');
// var Supplier = require('../models/supplier');
// var Body = require('../models/body');
import SubjectModel from '../models/subject';
import SupplierModel from '../models/supplier';
// import ObjectId from 'mongoose.Types.ObjectId';
const ObjectId = require('mongoose').Types.ObjectId;
const resolvers = {
  RootQuery: {
    getSubjects() {
      console.log("Received request for getSubjects()");
      return SubjectModel.find().then((res) => res);
    },

    getSubjectInfoById(_, args) {
      console.log("REQUESTED: " + args.id);
      return SubjectModel.findById(args.id).then((res) => res);
    },

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

  // Date: GraphQLDate,

  Subject: {
    supplier(_) {
      return SupplierModel.findById(new ObjectId(_.supplier)).then((res) => {
        // console.log(res);
        return res;
      });
    }
  },
  Supplier: {
    subjects(_) {
      // console.log("ID IS: " + JSON.stringify(_._id));
      // SubjectModel.find({supplier: _._id}).then((res) => console.log(JSON.stringify(res)));
      return SubjectModel.find({
        supplier: _._id
      }).then((res) => res);
    }
  }
};

export default resolvers
