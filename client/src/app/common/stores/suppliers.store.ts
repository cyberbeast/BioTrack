import { ActionReducer, Action } from '@ngrx/store';

export const ADD_SUPPLIERS = 'ADD_SUPPLIERS';
export const CREATE_SUPPLIER = 'CREATE_SUPPLIER';
export const UPDATE_SUPPLIER = 'UPDATE_SUPPLIER';
export const DELETE_SUPPLIER = 'DELETE_SUPPLIER';

export function suppliersReducer(state: any = [], action: Action) {
	switch (action.type) {
		case ADD_SUPPLIERS:
			return action.payload;

		case CREATE_SUPPLIER:
			return [...state, action.payload]

		case UPDATE_SUPPLIER:
      return state.map(supplier => {
        return supplier._id === action.payload._id ? Object.assign({}, supplier, action.payload) : supplier;
      });

    case DELETE_SUPPLIER:
      return state.filter(item => {
        return item._id !== action.payload._id;
      });

		default:
			return state;
	}
}
