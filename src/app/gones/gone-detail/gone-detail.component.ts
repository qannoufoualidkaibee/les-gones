import {Component, Input} from '@angular/core';

import {Gone} from '../../gone';
import {GoneService} from '../../gone.service';

@Component({
  selector: 'app-gone-detail',
  templateUrl: './gone-detail.component.html',
  styleUrls: [ './gone-detail.component.css' ]
})
export class GoneDetailComponent {
  @Input()
  gone: Gone | undefined;

  constructor(
    private goneService: GoneService
  ) {}

  save(): void {
    if (this.gone) {
      this.goneService.updateGone(this.gone)
        .subscribe();
    }
  }
}



