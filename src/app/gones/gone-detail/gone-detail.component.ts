import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Gone} from '../../gone';

@Component({
  selector: 'app-gone-detail',
  templateUrl: './gone-detail.component.html',
  styleUrls: [ './gone-detail.component.css' ]
})
export class GoneDetailComponent {
  @Input()
  gone: Gone | undefined;

  @Output()
  update = new EventEmitter<Gone>();
}



