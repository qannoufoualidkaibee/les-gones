import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { Gone } from '../../gone';
import { GoneService } from '../../gone.service';

@Component({
  selector: 'app-gones',
  templateUrl: './gones-management.component.html',
  styleUrls: ['./gones-management.component.css']
})
export class GonesManagementComponent implements OnInit {
  gones: Gone[] = [];

  constructor(private goneService: GoneService) { }

  ngOnInit(): void {
    this.getGones();
  }

  getGones(): void {
    this.goneService.getGones()
    .subscribe(gones => this.gones = gones);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.goneService.addGone({ name } as Gone)
      .subscribe(gone => {
        this.gones.push(gone);
      });
  }

  delete(gone: Gone): void {
    this.gones = this.gones.filter(h => h !== gone);
    this.goneService.deleteGone(gone.id).subscribe();
  }

}



