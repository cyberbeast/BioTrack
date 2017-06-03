import { ActionReducer, Action } from '@ngrx/store';
import { Supplier } from '../models/supplier.model'

export const SELECT_SUPPLIER = 'SELECT_SUPPLIER';

export function selectedSupplierReducer(state: Supplier = {'_id': 'none', 'name': "none", 'description': "none"}, action: Action ) {
  switch (action.type) {
    case SELECT_SUPPLIER:
      return action.payload;

    default:
      return state;
  }
}
