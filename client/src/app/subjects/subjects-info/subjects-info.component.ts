import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'biotrack-subjects-info',
  templateUrl: './subjects-info.component.html',
  styleUrls: ['./subjects-info.component.css']
})
export class SubjectsInfoComponent implements OnInit {
  @Input() metadata;
  @Input() identifications;

  constructor() { }

  ngOnInit() {
  }

}
