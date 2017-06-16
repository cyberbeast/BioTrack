import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {
  @Input() metadata;
  @Input() identifications;
  constructor() { }

  ngOnInit() {
  }

}
