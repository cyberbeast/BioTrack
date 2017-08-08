const dv = require('../defaultValues.json');

console.log('Exporting Resolvers for: AppValues');
export const appValuesResolvers = {
	RootQuery: {
		getAppValues() {
			console.log('Received request for getAppValues()');
			return {
				locations: dv.location,
				status: dv.status
			};
		}
	}
};
