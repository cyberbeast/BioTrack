import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModesService } from '../../../common/services/modes.service';

@Component({
  selector: 'biotrack-suppliers-details-subjects-tab',
  templateUrl: './suppliers-details-subjects-tab.component.html',
  styleUrls: ['./suppliers-details-subjects-tab.component.css']
})
export class SuppliersDetailsSubjectsTabComponent implements OnInit {

  @Input() subjectsBySelectedSupplier;

  constructor(
    private modesService: ModesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToSubjectId(id) {
    this.modesService.setMode('subjects');
    this.router.navigate(['/subjects', id]);
  }

}
