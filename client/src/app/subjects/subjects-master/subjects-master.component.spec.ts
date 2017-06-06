import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsMasterComponent } from './subjects-master.component';

describe('SubjectsMasterComponent', () => {
  let component: SubjectsMasterComponent;
  let fixture: ComponentFixture<SubjectsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
