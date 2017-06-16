import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.css']
})
export class CardLocationComponent implements OnInit {
  @Input() location;

  constructor() { }

  ngOnInit() {
  }

}
