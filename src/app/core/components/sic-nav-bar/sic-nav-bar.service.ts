import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SicNavBarService {

  constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';

  getUsers() {
    return this.http.get(this.configUrl);
  }

}
