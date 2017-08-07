import gql from 'graphql-tag';

export const fragmentComponentsOnSubject = gql`
	fragment Components on Subject {
		components {
			_id
			type
			location
			status
			notes
			group
		}
	}
`;
