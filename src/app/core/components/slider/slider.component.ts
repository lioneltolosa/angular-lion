import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
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
export class SliderComponent implements OnInit {

    items = [];
    constructor() {
        this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
    }

    ngOnInit() {
    }

}
