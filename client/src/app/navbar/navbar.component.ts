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

  fullscreenBool = false;
  selectedMode: Observable<string>;
  sections = [
    {
      'name': 'Suppliers',
      'routerLink': '/suppliers',
      'active': false
    },
    {
      'name': 'Subjects',
      'routerLink': '/subjects',
      'active': false
    },
    {
      'name': 'Inventory',
      'routerLink': '/suppliers',
      'active': false
    }
  ]

  fullscreen() {
    if (screenfull.enabled) {
      // console.log("isFullscreen " + screenfull.isFullscreen);
      this.fullscreenBool = this.fullscreenBool ? false : true;
      screenfull.toggle();
    }
  }

  setNewMode(mode) {
    this.modesService.setMode(mode.toLowerCase());
  }

  updateActiveProperty(mode, sections){
    for (var i=0; i < this.sections.length; i++) {
      if (sections[i].name.toLowerCase() === mode) {
        sections[i].active = true;
      }
      else {
        sections[i].active = false;
      }
    }
  }

  constructor(
    private modesService: ModesService,
    private store: Store<AppStore>
  ) {
    this.selectedMode = store.select('selectedMode');
    this.selectedMode.subscribe(v => {
      this.updateActiveProperty(v, this.sections);
    });

  }

  ngOnInit() { }

}
