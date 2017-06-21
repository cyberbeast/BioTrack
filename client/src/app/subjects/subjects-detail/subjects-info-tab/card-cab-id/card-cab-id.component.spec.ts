import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCabIdComponent } from './card-cab-id.component';

describe('CardCabIdComponent', () => {
  let component: CardCabIdComponent;
  let fixture: ComponentFixture<CardCabIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCabIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCabIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
