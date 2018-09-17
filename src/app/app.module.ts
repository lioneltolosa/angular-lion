import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicalGeneralModule } from './modules/medical-general/medical-general.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        MedicalGeneralModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    })

export class AppModule { }
