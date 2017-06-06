import { Component, OnInit } from '@angular/core';

// rxjs imports
import { Observable } from 'rxjs/Observable';

// ngrx store import
import { Store } from '@ngrx/store';

// subject service, models import
import { SubjectsService } from '../common/services/subjects.service';
import { AppStore } from '../common/models/appstore.model';
import { Subject } from '../common/models/subject.model';

@Component({
  selector: 'biotrack-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

  subjects: Observable<Array<Subject>>;

  constructor(
    private subjectsService: SubjectsService,
    private store: Store<AppStore>
  ) {
    subjectsService.loadSubjects();
    this.subjects = store.select('subjects');
  }

  ngOnInit() {
  }

}
