import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'biotrack-subjects-banner',
  templateUrl: './subjects-banner.component.html',
  styleUrls: ['./subjects-banner.component.css']
})
export class SubjectsBannerComponent implements OnInit {
  @Input() selectedSubject;
  currentSubject;
  currentSubjectsSupplierObject;
  currentSubjectsIdentificationObject;
  currentSubjectsMetadataObject;
  currentSubjectsMeasurementObject;

  private _router: Router;

  constructor(private router: Router) {
    this._router = router;
  }

  ngOnInit() {
    this.selectedSubject.subscribe(v => {
      this.currentSubject = v;
      this.currentSubjectsSupplierObject = v.supplier;
      console.log(JSON.stringify(this.currentSubjectsSupplierObject));
      this.currentSubjectsIdentificationObject = v.identifications;
      this.currentSubjectsMetadataObject = v.metadata;
      this.currentSubjectsMeasurementObject = v.measurements;
    });
  }

  navigateToSupplierView(){
    console.log("you clicked..." + this.currentSubjectsSupplierObject._id);
    this._router.navigate(['/suppliers', this.currentSubjectsSupplierObject._id])
  }

}
