import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.css']
})
export class SuppliersDetailComponent implements OnInit {
  @Input() suppliers;

  constructor() { }

  ngOnInit() {
  }

}
