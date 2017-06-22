import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-card-supplier',
  templateUrl: './card-supplier.component.html',
  styleUrls: ['./card-supplier.component.css']
})
export class CardSupplierComponent implements OnInit {
  @Input() supplier;

  constructor() {
  }

  ngOnInit() {
  }

}
