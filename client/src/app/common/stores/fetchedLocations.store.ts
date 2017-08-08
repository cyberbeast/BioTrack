import { ActionReducer, Action } from '@ngrx/store';

export const ADD_LOCATIONS = 'ADD_LOCATIONS';

export function fetchedLocationsReducer(state: any = [], action: Action) {
	switch (action.type) {
		case ADD_LOCATIONS:
			// console.log(JSON.stringify(action.payload));
			return action.payload;

		default:
			return state;
	}
}
