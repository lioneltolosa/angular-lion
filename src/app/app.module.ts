import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicalGeneralModule } from './modules/medical-general/medical-general.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        MedicalGeneralModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    })

export class AppModule { }
