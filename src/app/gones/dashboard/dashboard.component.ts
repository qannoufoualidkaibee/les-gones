import {Component, Input, OnInit} from '@angular/core';
import {Gone} from '../../gone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
  @Input()
  topGones: Gone[] | null;
}



