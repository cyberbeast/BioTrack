import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsMeasurementsComponent } from './subjects-measurements.component';

describe('SubjectsMeasurementsComponent', () => {
  let component: SubjectsMeasurementsComponent;
  let fixture: ComponentFixture<SubjectsMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
