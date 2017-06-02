import { ActionReducer, Action } from '@ngrx/store';

export const SET_MODE = 'SET_MODE';

export function selectedModeReducer(state: string = "dashboard", action: Action) {
	switch (action.type) {
		case SET_MODE:
			return action.payload;

		default:
			return state;
	}
}
