import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-biotrack-id',
  templateUrl: './card-biotrack-id.component.html',
  styleUrls: ['./card-biotrack-id.component.css']
})
export class CardBiotrackIdComponent implements OnInit {
  @Input() biotrackID;

  constructor() { }

  ngOnInit() {
  }

}
