import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGeneralComponent } from './medical-general.component';

describe('MedicalGeneralComponent', () => {
  let component: MedicalGeneralComponent;
  let fixture: ComponentFixture<MedicalGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
