import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuplierComponent } from './card-suplier.component';

describe('CardSuplierComponent', () => {
  let component: CardSuplierComponent;
  let fixture: ComponentFixture<CardSuplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSuplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
