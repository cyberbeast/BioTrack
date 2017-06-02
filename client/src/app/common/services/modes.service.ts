import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

// IMPORT MODELS
import { AppStore } from '../models/appstore.model';
import { Mode } from '../models/mode.model';

@Injectable()
export class ModesService {
  selectedMode$: Observable<Mode>;

  constructor( private store: Store<AppStore>) {
    this.selectedMode$ = store.select('selectedMode');
  }

  setMode(newMode: String) {
    console.log("THIS: " + JSON.stringify(newMode));
    this.store.dispatch({
      type: 'SET_MODE',
      payload: newMode
    });
  }

}
