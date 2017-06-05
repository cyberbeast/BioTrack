import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-suppliers-details-subjects-tab',
  templateUrl: './suppliers-details-subjects-tab.component.html',
  styleUrls: ['./suppliers-details-subjects-tab.component.css']
})
export class SuppliersDetailsSubjectsTabComponent implements OnInit {

  @Input() subjectsBySelectedSupplier;

  constructor() { }

  ngOnInit() {
  }

}
