import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Gone} from '../../gone';
import {GoneService} from "../../gone.service";

@Component({
  selector: 'app-gones-management',
  templateUrl: './gones-management.component.html',
  styleUrls: ['./gones-management.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GonesManagementComponent {
  @Input()
  gones: Gone[] | null;
  isAsideOpened: boolean;
  selectedGone: Gone | undefined;
  @Output()
  delete = new EventEmitter<Gone>();

  openGoneDetail(gone: Gone): void{
    this.isAsideOpened = true;
    this.selectedGone = {...gone};
  }

  closeAside(): void {
    debugger
    this.isAsideOpened = false;
    this.selectedGone = undefined;
  }
}



