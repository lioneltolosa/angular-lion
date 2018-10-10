import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicNavBarComponent } from './sic-nav-bar.component';

describe('SicNavBarComponent', () => {
  let component: SicNavBarComponent;
  let fixture: ComponentFixture<SicNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
