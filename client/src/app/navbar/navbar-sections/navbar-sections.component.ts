import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'biotrack-navbar-sections',
  templateUrl: './navbar-sections.component.html',
  styleUrls: ['./navbar-sections.component.css']
})
export class NavbarSectionsComponent implements OnInit {
  @Input() sections;
  @Output() newMode = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
