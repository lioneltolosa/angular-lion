import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { SicPreHeaderComponent } from './components/sic-pre-header/sic-pre-header.component';
import { SicLangPickerComponent } from './components/sic-lang-picker/sic-lang-picker.component';
import { SicFooterComponent } from './components/sic-footer/sic-footer.component';
import { SicHeaderComponent } from './components/sic-header/sic-header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SicNavBarComponent } from './components/sic-nav-bar/sic-nav-bar.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent,
        SliderComponent,
        TableComponent,
        SicPreHeaderComponent,
        SicLangPickerComponent,
        SicFooterComponent,
        SicHeaderComponent,
        UserInfoComponent,
        SicNavBarComponent,
    ],
    exports: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent,
        SliderComponent,
        TableComponent,
        SicPreHeaderComponent,
        SicLangPickerComponent,
        SicFooterComponent,
        SicHeaderComponent,
    ]
    })
export class CoreModule { }
