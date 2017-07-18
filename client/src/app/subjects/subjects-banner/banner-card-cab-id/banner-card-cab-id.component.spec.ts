import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardCabIdComponent } from './banner-card-cab-id.component';

describe('BannerCardCabIdComponent', () => {
  let component: BannerCardCabIdComponent;
  let fixture: ComponentFixture<BannerCardCabIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCardCabIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardCabIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
