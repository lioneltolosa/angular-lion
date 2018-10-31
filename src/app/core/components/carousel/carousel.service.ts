import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarouselService {

    constructor(private http: HttpClient) { }

    configUrl = 'assets/carousel.json';

    getConfig() {
        return this.http.get(this.configUrl);
    }

}
