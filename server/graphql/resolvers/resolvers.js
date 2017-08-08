import { merge } from 'lodash';

import { subjectResolvers } from './subjectResolvers';
import { supplierResolvers } from './supplierResolvers';
import { appValuesResolvers } from './appValuesResolvers';

const resolvers = merge(
	subjectResolvers,
	supplierResolvers,
	appValuesResolvers
);

console.log('Compiling BioTrack GraphQL Resolvers...');
export default resolvers;
