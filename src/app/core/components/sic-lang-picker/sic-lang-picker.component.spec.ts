import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicLangPickerComponent } from './sic-lang-picker.component';

describe('SicLangPickerComponent', () => {
  let component: SicLangPickerComponent;
  let fixture: ComponentFixture<SicLangPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicLangPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicLangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
