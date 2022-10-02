import {Component, OnInit} from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {Gone} from '../../gone';
import {GoneService} from '../../gone.service';

@Component({
  selector: 'app-gone-search',
  templateUrl: './gone-search.component.html',
  styleUrls: [ './gone-search.component.css' ]
})
export class GoneSearchComponent implements OnInit {
  gones$!: Observable<Gone[]>;
  private searchTerms = new Subject<string>();
  isAsideOpened: boolean;
  selectedGone: Gone | undefined;

  constructor(private goneService: GoneService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.gones$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.goneService.searchGones(term)),
    );
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



