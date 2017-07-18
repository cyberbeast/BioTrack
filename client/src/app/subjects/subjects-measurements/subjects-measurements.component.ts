import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-measurements',
  templateUrl: './subjects-measurements.component.html',
  styleUrls: ['./subjects-measurements.component.css']
})
export class SubjectsMeasurementsComponent implements OnInit {
  @Input() measurements;

  constructor() { }

  ngOnInit() {
  }

}
