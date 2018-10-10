import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    apiRoot: String = 'http://httpbin.org';

  constructor() { }

  ngOnInit() {
  }

  doGET() {
      console.log('GET');
  }

  doPOST() {
    console.log('POST');
  }

  doPUT() {
    console.log('PUT');
  }

  doDELETE() {
    console.log('DELETE');
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
  }
}
