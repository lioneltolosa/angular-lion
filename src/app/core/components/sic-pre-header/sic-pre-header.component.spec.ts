import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicPreHeaderComponent } from './sic-pre-header.component';

describe('SicPreHeaderComponent', () => {
  let component: SicPreHeaderComponent;
  let fixture: ComponentFixture<SicPreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicPreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicPreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
