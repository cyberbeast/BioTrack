import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-cab-id',
  templateUrl: './card-cab-id.component.html',
  styleUrls: ['./card-cab-id.component.css']
})
export class CardCabIdComponent implements OnInit {
  @Input() cabID;

  constructor() { }

  ngOnInit() {
  }

}
