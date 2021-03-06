import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'biotrack-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.css']
})
export class SuppliersDetailComponent implements OnInit {
  @Input() selectedSupplier;
  @Input() subjectsBySelectedSupplier;
  @Output() newMode = new EventEmitter();

  name: string;
  description: string;
  id: string;

  constructor() { }

  ngOnInit() {
    this.selectedSupplier.subscribe(v => {
      console.log(JSON.stringify(v));
      this.name = v.name;
      this.description = v.description;
      this.id = v._id;
    });
    // this.name = this.selectedSupplier.name;
  }

}
