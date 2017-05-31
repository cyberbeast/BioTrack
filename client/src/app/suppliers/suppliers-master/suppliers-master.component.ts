import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-suppliers-master',
  templateUrl: './suppliers-master.component.html',
  styleUrls: ['./suppliers-master.component.css']
})

export class SuppliersMasterComponent implements OnInit {

  @Input() suppliers;
  constructor() { }

  ngOnInit() {
  }

}
