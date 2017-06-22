import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-measurement-tab',
  templateUrl: './subjects-measurement-tab.component.html',
  styleUrls: ['./subjects-measurement-tab.component.css']
})
export class SubjectsMeasurementTabComponent implements OnInit {
  @Input() currentSubjectsMeasurementObject;

  constructor() { }

  ngOnInit() {
  }

}
