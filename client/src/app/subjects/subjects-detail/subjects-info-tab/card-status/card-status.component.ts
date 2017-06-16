import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {
  @Input() status;
  constructor() { }

  ngOnInit() {
  }

}
