import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardIdComponent } from './banner-card-id.component';

describe('BannerCardIdComponent', () => {
  let component: BannerCardIdComponent;
  let fixture: ComponentFixture<BannerCardIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCardIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
