import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicHeaderComponent } from './sic-header.component';

describe('SicHeaderComponent', () => {
  let component: SicHeaderComponent;
  let fixture: ComponentFixture<SicHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
