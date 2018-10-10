import { Component, OnInit } from '@angular/core';
import { SicNavBarService } from './sic-nav-bar.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sic-nav-bar',
  templateUrl: './sic-nav-bar.component.html',
  providers:  [ SicNavBarService ],
  styleUrls: ['./sic-nav-bar.component.scss']
})

export class SicNavBarComponent implements OnInit {
    users$: Object;

  constructor(private data: SicNavBarService ) { }

    ngOnInit() {
        this.data.getUsers().subscribe (
            data => this.users$ = data
        );
    }


}
