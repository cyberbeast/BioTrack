import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// rxjs imports
import { Observable } from 'rxjs/Observable';

// ngrx store import
import { Store } from '@ngrx/store';

// subject service, models import
import { SubjectsService } from '../common/services/subjects.service';
import { ModesService } from '../common/services/modes.service';
import { AppStore } from '../common/models/appstore.model';
import { Subject } from '../common/models/subject.model';

@Component({
  selector: 'biotrack-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

  subjects: Observable<Array<Subject>>;
  selectedSubject: Observable<Subject>;
  activeSubjectId: string;

  selectedSubjectMetadata: any;
  selectedSubjectIdentifications: any;
  selectedSubjectMeasurements: any;

  constructor(
    private subjectsService: SubjectsService,
    private modesService: ModesService,
    private store: Store<AppStore>,
    private route: ActivatedRoute
  ) {
    subjectsService.loadSubjects();
    this.subjects = store.select('subjects');
    this.selectedSubject = store.select('selectedSubject');
    this.selectedSubject.subscribe(v => {
      // console.log("selectedSubject is: " + JSON.stringify(v));
      this.activeSubjectId = v._id;
      this.selectedSubjectMetadata = v.metadata;
      this.selectedSubjectIdentifications = v.identifications;
      this.selectedSubjectMeasurements = v.measurements;
      // console.log(this.activeSubjectId);
    });
  }

  selectSubject(subject) {
    this.subjectsService.selectSubject(subject);
  }

  ngOnInit() {
    this.modesService.setMode("subjects");

    this.route.params.subscribe(params => {
      this.selectSubject(params.subject_id);
    });

    // this.subjectsService.loadSubjects();

  }

}
