import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsBannerComponent } from './subjects-banner.component';

describe('SubjectsBannerComponent', () => {
  let component: SubjectsBannerComponent;
  let fixture: ComponentFixture<SubjectsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
