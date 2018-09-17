import { Component, OnInit } from '@angular/core';
import { trigger, style, query, stagger, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-medical-general',
    templateUrl: './medical-general.component.html',
    styleUrls: ['./medical-general.component.scss'],
    animations: [
        trigger('sliderAnimation', [
            transition('* => *', [
                    query('.col', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),
                    query('.col', stagger('500ms', [
                    animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
                ])),
                query('.col', [
                animate(1000, style('*'))
                ])
            ])
        ]),
    ]
})
export class MedicalGeneralComponent implements OnInit {
    state = 'off';

    constructor() { }

    toggleState() {
        this.state = this.state === 'off' ? 'on' : 'off';
      }

    ngOnInit() {
    }

}
