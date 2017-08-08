import { ActionReducer, Action } from '@ngrx/store';
import { Subject } from '../models/subject.model';

export const SELECT_SUBJECT = 'SELECT_SUBJECT';
export const UPDATE_SUBJECT_COMPONENT_LOCATION =
	'UPDATE_SUBJECT_COMPONENT_LOCATION';
export const UPDATE_SUBJECT_COMPONENT_STATUS =
	'UPDATE_SUBJECT_COMPONENT_STATUS';
export const UPDATE_SUBJECT_COMPONENT_NOTES = 'UPDATE_SUBJECT_COMPONENT_NOTES';

export function selectedSubjectReducer(state: any = {}, action: Action) {
	switch (action.type) {
		case SELECT_SUBJECT:
			return action.payload;

		case UPDATE_SUBJECT_COMPONENT_LOCATION:
			var id_list = [];
			for (var entry in action.payload) {
				id_list.push(entry['_id']);
			}

			return state.components.map(component => {
				return id_list.includes(component._id)
					? Object.assign({}, component, action.payload)
					: component;
			});

		case UPDATE_SUBJECT_COMPONENT_STATUS:
			var id_list = [];
			for (var entry in action.payload) {
				id_list.push(entry['_id']);
			}

			return state.components.map(component => {
				return id_list.includes(component._id)
					? Object.assign({}, component, action.payload)
					: component;
			});

		case UPDATE_SUBJECT_COMPONENT_NOTES:
			var id_list = [];
			for (var entry in action.payload) {
				id_list.push(entry['_id']);
			}

			return state.components.map(component => {
				return id_list.includes(component._id)
					? Object.assign({}, component, action.payload)
					: component;
			});

		default:
			return state;
	}
}
