var Supplier = require('../models/supplier');
var Body = require('../models/body');

const resolvers = {
  Query: {
    body() {
      return Body.find().then((res) => res);
    },

    supplier() {
      return Supplier.find().then((res) => res);
    }

  },
  Body: {
    supplier(body) {
      return Supplier.findById(body.supplier).then((res) => res);
    }
  },
  Supplier: {
    subjects(supplier) {
      return Body.find({
        supplier: supplier._id
      }).then((res) => res);
    }
  }
};

export default resolvers
