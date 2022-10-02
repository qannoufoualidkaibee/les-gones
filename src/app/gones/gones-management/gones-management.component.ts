import {Component, EventEmitter} from '@angular/core';

import {Gone} from '../../gone';
import {GoneService} from "../../gone.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-gones-management',
  templateUrl: './gones-management.component.html',
  styleUrls: ['./gones-management.component.css']
})
export class GonesManagementComponent{
  gones: Gone[] = [];
  isAsideOpened: boolean;
  selectedGone: Gone | undefined;

  constructor(private goneService: GoneService) { }

  ngOnInit(): void {
    this.getGones();
  }

  getGones(): void {
    this.goneService.getGones()
        .subscribe(gones => this.gones = gones);
  }

  delete(gone: Gone): void {
    this.gones = this.gones.filter(h => h !== gone);
    this.goneService.deleteGone(gone.id).subscribe();
  }

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



