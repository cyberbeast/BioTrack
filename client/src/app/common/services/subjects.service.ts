import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import { Subject as rxjsSubject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// APOLLO CLIENT IMPORTS
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// IMPORT MODELS
import { AppStore } from '../models/appstore.model';
import { Subject } from '../models/subject.model';

// QUERIES & FRAGMENT IMPORTS
import { fragmentMeasurementsOnSubject } from './fragments/measurementsOnSubject.fragment';
import { fragmentIdentificationsOnSubject } from './fragments/identificationsOnSubject.fragment';
import { fragmentMetadataOnSubject } from './fragments/metadataOnSubject.fragment';
import { fragmentSupplierOnSubject } from './fragments/supplierOnSubject.fragment';
import { fragmentActivityLogOnSubject } from './fragments/activitylogOnSubject.fragment';

const getSubjects = gql`
  query getSubjects {
    getSubjects {
      _id
      notes
      ...Identifications
      ...Metadata
      ...Measurements
      ...Supplier
      ...ActivityLog
    }
  }
  ${fragmentMeasurementsOnSubject}
  ${fragmentIdentificationsOnSubject}
  ${fragmentMetadataOnSubject}
  ${fragmentSupplierOnSubject}
  ${fragmentActivityLogOnSubject}

`

const getSubjectInfoById = gql`
  query getSubjectInfoById($id: String!) {
    getSubjectInfoById(id: $id) {
      _id
      notes
      ...Identifications
      ...Metadata
      ...Measurements
      ...Supplier
      ...ActivityLog
    }
  }
  ${fragmentMeasurementsOnSubject}
  ${fragmentIdentificationsOnSubject}
  ${fragmentMetadataOnSubject}
  ${fragmentSupplierOnSubject}
  ${fragmentActivityLogOnSubject}
`

@Injectable()
export class SubjectsService {
  private subjects$: Observable<Array<Subject>>;
  private selectedSubject$: Observable<Subject>;
  private selectedSubjectSub: any;

  constructor(
    private apollo: Apollo,
    private store: Store<AppStore>
  ) {
    this.subjects$ = store.select('subjects');
    this.selectedSubject$ = store.select('selectedSubject');
  }

  loadSubjects() {
    this.apollo.watchQuery<any>({
      query: getSubjects
    }).subscribe(({data}) => {
      // console.log(JSON.stringify(data.getSubjects));
      this.store.dispatch({
        type: 'ADD_SUBJECTS',
        payload: data.getSubjects
      });
    });
  }

  selectSubject(newSubjectId: String) {
    console.log("RECEIVED REQ for: " + newSubjectId);
    this.apollo.watchQuery<any>({
      query: getSubjectInfoById,
      variables: {
        id: newSubjectId
      }
    }).subscribe(({data}) => {
      console.log("Selecting new subject: " + JSON.stringify(data.getSubjectInfoById));
      this.store.dispatch({
        type: 'UPDATE_SUBJECT',
        payload: data.getSubjectInfoById
      });

      this.store.dispatch({
        type: 'SELECT_SUBJECT',
        payload: data.getSubjectInfoById
      });
    })
  }

  // selectSubject(newSubject: Subject) {
  //   console.log("Selecting new subject: " + JSON.stringify(newSubject));
  //   this.store.dispatch({
  //     type: 'SELECT_SUBJECT',
  //     payload: newSubject
  //   });
  // }
}
