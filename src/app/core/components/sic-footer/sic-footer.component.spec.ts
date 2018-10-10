import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicFooterComponent } from './sic-footer.component';

describe('SicFooterComponent', () => {
  let component: SicFooterComponent;
  let fixture: ComponentFixture<SicFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
