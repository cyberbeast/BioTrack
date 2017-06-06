import { ActionReducer, Action } from '@ngrx/store';

export const ADD_SUBJECTS = 'ADD_SUBJECTS';
export const CREATE_SUBJECT = 'CREATE_SUBJECT';
export const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';

export function subjectsReducer(state: any = [], action: Action) {
  switch (action.type) {
    case ADD_SUBJECTS:
      return action.payload;

    case CREATE_SUBJECT:
      return [...state, action.payload]

    case UPDATE_SUBJECT:
      return state.map(subject => {
        return subject._id === action.payload._id ? Object.assign({}, subject, action.payload) : subject;
      });

    case DELETE_SUBJECT:
      return state.filter(item => {
        return item._id !== action.payload._id;
      });

    default:
      return state;
  }
}
