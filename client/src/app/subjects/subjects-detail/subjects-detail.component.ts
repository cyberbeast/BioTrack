import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-detail',
  templateUrl: './subjects-detail.component.html',
  styleUrls: ['./subjects-detail.component.css']
})
export class SubjectsDetailComponent implements OnInit {
  @Input() selectedSubject;
  currentSubject;
  currentSubjectsIdentificationObject;
  currentSubjectsMetadataObject;

  constructor() { }

  ngOnInit() {
    this.selectedSubject.subscribe(v => {
      this.currentSubject = v;
      this.currentSubjectsIdentificationObject = v.identifications;
      this.currentSubjectsMetadataObject = v.metadata;
    });
  }

}
