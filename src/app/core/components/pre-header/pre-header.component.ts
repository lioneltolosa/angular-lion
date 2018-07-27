import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss']
})
export class PreHeaderComponent implements OnInit {
    menuItem: any[] = [
        {
            item: 'Home',
        },
        {
            item: 'Peoples',
        },
        {
            item: 'Control',
        },
        {
            item: 'Contact',
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
