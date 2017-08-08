import { ActionReducer, Action } from '@ngrx/store';

export const ADD_STATUS = 'ADD_STATUS';

export function fetchedStatusReducer(state: any = [], action: Action) {
	switch (action.type) {
		case ADD_STATUS:
			// console.log(JSON.stringify(action.payload));
			return action.payload;

		default:
			return state;
	}
}
