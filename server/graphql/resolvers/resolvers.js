import { merge } from 'lodash';

import { subjectResolvers } from './subjectResolvers';
import { supplierResolvers } from './supplierResolvers';

const resolvers = merge(
  subjectResolvers,
  supplierResolvers
)

console.log("Compiling BioTrack GraphQL Resolvers...");
export default resolvers
