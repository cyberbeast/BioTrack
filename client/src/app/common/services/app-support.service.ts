import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject as rxjsSubject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// APOLLO CLIENT IMPORTS
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// IMPORT MODELS
import { AppStore } from '../models/appstore.model';

const getAppValues = gql`
	query {
		getAppValues {
			locations
			status
		}
	}
`;

@Injectable()
export class AppSupportService {
	public appValues_locations$: Observable<Array<string>>;
	public appValues_status$: Observable<Array<string>>;

	constructor(private apollo: Apollo, private store: Store<AppStore>) {
		this.appValues_locations$ = store.select('possible_locations');
		this.appValues_status$ = store.select('possible_status');
	}

	fetchAppValues() {
		this.apollo
			.watchQuery<any>({
				query: getAppValues
			})
			.subscribe(({ data }) => {
				this.store.dispatch({
					type: 'ADD_LOCATIONS',
					payload: data.getAppValues.locations
				});

				this.store.dispatch({
					type: 'ADD_STATUS',
					payload: data.getAppValues.status
				});
			});
	}
}
