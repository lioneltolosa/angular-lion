import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        PreHeaderComponent,
        FooterComponent,
        HeaderComponent
    ]
    })
export class CoreModule { }
