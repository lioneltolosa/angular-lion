import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

import { MedicalGeneralComponent } from './medical-general.component';

@NgModule({
  imports: [
    NgbModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MedicalGeneralComponent,
    PersonalInformationComponent,
  ],
  exports: [
      MedicalGeneralComponent
    ]
})
export class MedicalGeneralModule { }
