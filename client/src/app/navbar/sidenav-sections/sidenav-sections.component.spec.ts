import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSectionsComponent } from './sidenav-sections.component';

describe('SidenavSectionsComponent', () => {
  let component: SidenavSectionsComponent;
  let fixture: ComponentFixture<SidenavSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
