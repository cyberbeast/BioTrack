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

// QUERIES
const getSubjects = gql`
  query getSubjects {
    getSubjects {
      _id
      notes
      identifications
      metadata
      measurements
      supplier
      activity_log
    }
  }
`

@Injectable()
export class SubjectsService {
  private subjects$: Observable<Array<Subject>>;
  private selectedSubject$: Observable<Subject>;

  constructor(
    private apollo: Apollo,
    private store: Store<AppStore>
  ) {
    this.subjects$ = store.select('subjects');
    // this.selectedSubject$ = store.select('selectedSubject');
  }

  loadSubjects() {
    this.apollo.watchQuery<any>({
      query: getSubjects
    }).subscribe(({data}) => {
      this.store.dispatch({
        type: 'ADD_SUBJECTS',
        payload: data['getSubjects']
      });
    });
  }
}
