import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsSidepanelComponent } from './subjects-sidepanel.component';

describe('SubjectsSidepanelComponent', () => {
  let component: SubjectsSidepanelComponent;
  let fixture: ComponentFixture<SubjectsSidepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsSidepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
