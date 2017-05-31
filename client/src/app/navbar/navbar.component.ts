import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'biotrack-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fullscreen() {
    if (screenfull.enabled) {
            screenfull.toggle();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
