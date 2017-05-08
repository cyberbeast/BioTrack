import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from '../resolvers/resolvers';
import Subject from './subject';
import Supplier from './supplier';
import EnumTypes from './enum';

// # supplier(name: String): Supplier

const RootQuery = `
  type RootQuery {
    getSuppliers: [Supplier]
    getSubjectInfoById(id: String!): Subject
    
    getSupplierInfoById(id: String!): Supplier
    getSupplierInfoByName(name: String!): Supplier

    getSubjects: [Subject]

  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, EnumTypes, Subject, Supplier],
  resolvers: Resolvers
});