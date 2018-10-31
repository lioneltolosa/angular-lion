import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers:  [ CarouselService ],
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    items$: Object;

    constructor(private carousel: CarouselService ) { }

    ngOnInit() {
        this.carousel.getConfig().subscribe (
            carousel => this.items$ = carousel
        );
    }

}
