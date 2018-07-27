import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreHeaderComponent
    ],
    exports: [
        PreHeaderComponent
    ]
    })
export class CoreModule { }
