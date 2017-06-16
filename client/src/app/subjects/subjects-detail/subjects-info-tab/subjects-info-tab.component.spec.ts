import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsInfoTabComponent } from './subjects-info-tab.component';

describe('SubjectsInfoTabComponent', () => {
  let component: SubjectsInfoTabComponent;
  let fixture: ComponentFixture<SubjectsInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
