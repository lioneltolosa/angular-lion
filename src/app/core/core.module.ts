import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent,
        SliderComponent
    ],
    exports: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent,
        SliderComponent
    ]
    })
export class CoreModule { }
