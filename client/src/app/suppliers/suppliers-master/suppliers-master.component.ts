import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'biotrack-suppliers-master',
  templateUrl: './suppliers-master.component.html',
  styleUrls: ['./suppliers-master.component.css']
})

export class SuppliersMasterComponent implements OnInit {

  @Input() suppliers;
  @Input() activeSupplier;
  @Output() selectedSupplier = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
