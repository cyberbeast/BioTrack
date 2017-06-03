import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDetailsSubjectsTabComponent } from './suppliers-details-subjects-tab.component';

describe('SuppliersDetailsSubjectsTabComponent', () => {
  let component: SuppliersDetailsSubjectsTabComponent;
  let fixture: ComponentFixture<SuppliersDetailsSubjectsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDetailsSubjectsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDetailsSubjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
