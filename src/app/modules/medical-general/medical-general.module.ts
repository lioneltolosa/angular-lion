import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PersonalInformationComponent } from './components/personal-information/personal-information.component';

import { MedicalGeneralComponent } from './medical-general.component';

@NgModule({
  imports: [
    NgbModule,
  ],
  declarations: [
    MedicalGeneralComponent,
    PersonalInformationComponent,
  ]
})
export class MedicalGeneralModule { }
