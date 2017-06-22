import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsMeasurementTabComponent } from './subjects-measurement-tab.component';

describe('SubjectsMeasurementTabComponent', () => {
  let component: SubjectsMeasurementTabComponent;
  let fixture: ComponentFixture<SubjectsMeasurementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsMeasurementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsMeasurementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
