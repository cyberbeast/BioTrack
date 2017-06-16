import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsActivityTabComponent } from './subjects-activity-tab.component';

describe('SubjectsActivityTabComponent', () => {
  let component: SubjectsActivityTabComponent;
  let fixture: ComponentFixture<SubjectsActivityTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsActivityTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsActivityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
