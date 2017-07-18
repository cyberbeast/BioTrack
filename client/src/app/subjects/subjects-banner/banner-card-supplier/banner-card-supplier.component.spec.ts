import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardSupplierComponent } from './banner-card-supplier.component';

describe('BannerCardSupplierComponent', () => {
  let component: BannerCardSupplierComponent;
  let fixture: ComponentFixture<BannerCardSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCardSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
