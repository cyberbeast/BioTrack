import { ActionReducer, Action } from '@ngrx/store';
import { Subject } from '../models/subject.model';

export const SELECT_SUBJECT = 'SELECT_SUBJECT';

export function selectedSubjectReducer(state: Subject = {}, action: Action) {
  switch (action.type) {
    case SELECT_SUBJECT:
      return action.payload;

    default:
      return state;
  }
}
