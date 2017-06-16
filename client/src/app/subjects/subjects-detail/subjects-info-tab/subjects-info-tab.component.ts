import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-info-tab',
  templateUrl: './subjects-info-tab.component.html',
  styleUrls: ['./subjects-info-tab.component.css']
})
export class SubjectsInfoTabComponent implements OnInit {
  @Input() currentSubject;
  @Input() currentSubjectsIdentificationObject;
  @Input() currentSubjectsMetadataObject;
  location_card_input = "set on template directly";
  status_card_input = "Available";

  constructor() { }

  ngOnInit() {
  }

}
