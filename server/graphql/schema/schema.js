import { makeExecutableSchema } from 'graphql-tools';
import Subject from './types/subject';
import Supplier from './types/supplier';
import EnumTypes from './enums/enum';
import Activity from './types/activity';
import Measurement from './types/measurement';
import Metadata from './types/metadata';
import ID from './types/id';
import Component from './types/component';
import AppValues from './types/appvalues';

// Input types
import AddComponentInput from './inputs/AddComponentInput';
import MoveComponentInput from './inputs/moveComponentInput';
import ChangeComponentStatusInput from './inputs/changeComponentStatusInput';
import AddComponentNoteInput from './inputs/addComponentNoteInput';

// Resolvers
import Resolvers from '../resolvers/resolvers';

// # supplier(name: String): Supplier

const RootQuery = `
  type RootQuery {
    getSuppliers: [Supplier]
    getSubjectInfoById(id: String!): Subject

    getSupplierInfoById(id: String!): Supplier
    getSupplierInfoByName(name: String!): Supplier

    getSubjects: [Subject]
    getAppValues: AppValues
  }
`;

const Mutation = `
  type RootMutation {

		addComponentToSubject(input: AddComponentInput!) : Component
		
		moveComponent(input: MoveComponentInput!) : [Component] 
		
		changeComponentStatus(input: ChangeComponentStatusInput!) : [Component]
		
		addComponentNote(input: AddComponentNoteInput!) : [Component]

  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

console.log('Compiling BioTrack GraphQL Schema...');
export default makeExecutableSchema({
	typeDefs: [
		SchemaDefinition,
		RootQuery,
		EnumTypes,
		Subject,
		Supplier,
		Activity,
		Measurement,
		Metadata,
		Component,
		ID,
		AppValues,
		Mutation,
		AddComponentInput,
		MoveComponentInput,
		ChangeComponentStatusInput,
		AddComponentNoteInput
	],
	resolvers: Resolvers
});
