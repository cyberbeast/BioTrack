import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBiotrackIdComponent } from './card-biotrack-id.component';

describe('CardBiotrackIdComponent', () => {
  let component: CardBiotrackIdComponent;
  let fixture: ComponentFixture<CardBiotrackIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBiotrackIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBiotrackIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
