import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
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
      _id
      name
      description
    }
  }
`;

const getSupplierInfoById = gql`
  query getSupplierInfoById($id: String!) {
    getSupplierInfoById(id: $id) {
      _id
      name
      description
    }
  }
`

const getSubjectsBySupplierId = gql`
  query getSubjectsBySupplierId($id: String!) {
    getSupplierInfoById(id: $id) {
      _id
      subjects {
        _id
      }
    }
  }
`


@Injectable()
export class SuppliersService {
  private suppliers$: Observable<Array<Supplier>>;
  private selectedSupplier$: Observable<Supplier>;
  private subjectsBySelectedSupplier$ = new Subject<Array<any>>();
  private selectedSupplierSub: any;

  constructor(
    private apollo: Apollo,
    private store: Store<AppStore>
  ) {
    this.suppliers$ = store.select('suppliers');
    this.selectedSupplier$ = store.select('selectedSupplier');
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

  selectSupplier(newSupplierId: String) {
    console.log("RECEIVED REQ for: " + newSupplierId);
    this.apollo.watchQuery<any>({
      query: getSupplierInfoById,
      variables: {
        id: newSupplierId
      }
    }).subscribe(({data}) => {
      console.log("Selecting new supplier: " + JSON.stringify(data.getSupplierInfoById));
      this.store.dispatch({
        type: 'UPDATE_SUPPLIER',
        payload: data.getSupplierInfoById
      });

      this.store.dispatch({
        type: 'SELECT_SUPPLIER',
        payload: data.getSupplierInfoById
      });

      this.selectedSupplierSub = this.selectedSupplier$.subscribe(v => {
        console.log("SUPPLIER SERVICE: Fetching subjects for Supplier with id - " + v._id);
        this.apollo.watchQuery<any>({
          query: getSubjectsBySupplierId,
          variables: {
            id: v._id
          }
        }).subscribe(({data}) => {
          // console.log("Subjects for this supplier are: " + JSON.stringify(data));
          this.subjectsBySelectedSupplier$.next(data.getSupplierInfoById.subjects);

          this.selectedSupplierSub.unsubscribe();
        });
      });
    });


  }

  // COPY OF selectSupplier method as was working previously
  // selectSupplier(newSupplier: Supplier) {
  //   console.log("Selecting new supplier: " + JSON.stringify(newSupplier));
  //   this.store.dispatch({
  //     type: 'SELECT_SUPPLIER',
  //     payload: newSupplier
  //   });
  //
  //   this.selectedSupplier$.subscribe(v => {
  //     console.log("SUPPLIER SERVICE: Fetching subjects for Supplier with id - " + v._id);
  //     this.apollo.watchQuery<any>({
  //       query: getSubjectsBySupplierId,
  //       variables: {
  //         id: v._id
  //       }
  //     }).subscribe(({data}) => {
  //       // console.log("Subjects for this supplier are: " + JSON.stringify(data));
  //       this.subjectsBySelectedSupplier$.next(data.getSupplierInfoById.subjects)
  //     });
  //   });
  // }

  getSubjectsBySelectedSupplier(): Observable<any> {
    return this.subjectsBySelectedSupplier$.asObservable();
  }
}
