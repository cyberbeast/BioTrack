import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsDetailComponent } from './subjects-detail.component';

describe('SubjectsDetailComponent', () => {
  let component: SubjectsDetailComponent;
  let fixture: ComponentFixture<SubjectsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
