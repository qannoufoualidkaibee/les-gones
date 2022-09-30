import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Gone } from '../../gone';
import { GoneService } from '../../gone.service';

@Component({
  selector: 'app-gone-detail',
  templateUrl: './gone-detail.component.html',
  styleUrls: [ './gone-detail.component.css' ]
})
export class GoneDetailComponent implements OnInit {
  gone: Gone | undefined;

  constructor(
    private route: ActivatedRoute,
    private goneService: GoneService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGone();
  }

  getGone(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.goneService.getGone(id)
      .subscribe(gone => this.gone = gone);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.gone) {
      this.goneService.updateGone(this.gone)
        .subscribe(() => this.goBack());
    }
  }
}



