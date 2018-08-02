import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicalGeneralComponent } from './modules/medical-general/medical-general.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        MedicalGeneralComponent
    ],
    bootstrap: [
        AppComponent
    ],
    })

export class AppModule { }
