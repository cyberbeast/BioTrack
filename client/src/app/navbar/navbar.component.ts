import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { ModesService } from '../common/services/modes.service';
import { AppStore } from '../common/models/appstore.model';
import { Mode } from '../common/models/mode.model';


@Component({
  selector: 'biotrack-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedMode: Observable<string>;

  fullscreen() {
    if (screenfull.enabled) {
            screenfull.toggle();
    }
  }

  tempMode: string = 'a';

  isActive(mode) {
    if (mode ===  this.tempMode){
      return true;
    }
    else {
      return false;
    }
  }

  constructor(
    private modesService: ModesService,
    private store: Store<AppStore>
  ) {
    this.selectedMode = store.select('selectedMode');
    this.selectedMode.subscribe(v => this.tempMode = v);

  }

  ngOnInit() { }

}
