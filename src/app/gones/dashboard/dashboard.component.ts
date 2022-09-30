import { Component, OnInit } from '@angular/core';
import { Gone } from '../../gone';
import { GoneService } from '../../gone.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  gones: Gone[] = [];

  constructor(private goneService: GoneService) { }

  ngOnInit(): void {
    this.getGones();
  }

  getGones(): void {
    this.goneService.getGones()
      .subscribe(gones => this.gones = gones.slice(1, 5));
  }
}



