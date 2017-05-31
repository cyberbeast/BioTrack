import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

// APOLLO CLIENT IMPORTS
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// IMPORT MODELS
import {AppStore} from '../models/appstore.model';
import {Supplier} from '../models/supplier.model';

// QUERIES
const getSuppliers = gql`
  query getSuppliers {
    getSuppliers {
      name
      description
    }
  }
`;


@Injectable()
export class SuppliersService {
  suppliers$: Observable<Array<Supplier>>;

  constructor(
    private apollo: Apollo,
    private store: Store<AppStore>
  ) {
    this.suppliers$ = store.select('suppliers');
  }

  loadSuppliers() {
    this.apollo.watchQuery<any>({
      query: getSuppliers
    }).subscribe(({data}) => {
      this.store.dispatch({
        type: 'ADD_SUPPLIERS',
        payload: data['getSuppliers']
      });
    });
  }


}
