import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-master',
  templateUrl: './subjects-master.component.html',
  styleUrls: ['./subjects-master.component.css']
})
export class SubjectsMasterComponent implements OnInit {

  @Input() subjects;
  @Input() activeSubjectId;
  @Output() selectedSubject = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
