import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsTabsComponent } from './subjects-tabs.component';

describe('SubjectsTabsComponent', () => {
  let component: SubjectsTabsComponent;
  let fixture: ComponentFixture<SubjectsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
