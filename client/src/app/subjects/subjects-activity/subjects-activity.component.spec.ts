import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsActivityComponent } from './subjects-activity.component';

describe('SubjectsActivityComponent', () => {
  let component: SubjectsActivityComponent;
  let fixture: ComponentFixture<SubjectsActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
