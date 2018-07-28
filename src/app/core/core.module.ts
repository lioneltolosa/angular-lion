import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreHeaderComponent,
        FooterComponent
    ],
    exports: [
        PreHeaderComponent,
        FooterComponent
    ]
    })
export class CoreModule { }
