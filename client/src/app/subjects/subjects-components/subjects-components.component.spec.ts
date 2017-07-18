import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsComponentsComponent } from './subjects-components.component';

describe('SubjectsComponentsComponent', () => {
  let component: SubjectsComponentsComponent;
  let fixture: ComponentFixture<SubjectsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
