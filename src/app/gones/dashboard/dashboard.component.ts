import { Component, OnInit } from '@angular/core';
import { Gone } from '../../gone';
import { GoneService } from '../../gone.service';
import {tap} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  topGones: Gone[] = [];
  gones: Gone[] = [];

  constructor(private goneService: GoneService) { }

  ngOnInit(): void {
    this.getGones();
    this.getTopGones();
  }

  getTopGones(): void {
    this.goneService.getTopGones()
        .pipe(tap((res) => console.log(res)))
      .subscribe(topGones => this.topGones = topGones);
  }

  getGones(): void {
    this.goneService.getGones()
        .subscribe(gones => this.gones = gones);
  }

  delete(gone: Gone): void {
    this.gones = this.gones.filter(h => h !== gone);
    this.goneService.deleteGone(gone.id).subscribe();
  }

}



