import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {Gone} from "../gone";
import {GonesState} from "./store/gones.state";
import {DeleteGone, LoadGones, LoadTopGones, UpdateGone} from "./store/gones.action";

@Component({
  selector: 'app-gones',
  templateUrl: './gones.component.html',
  styleUrls: ['./gones.component.css']
})
export class GonesComponent implements OnInit {

  @Select(GonesState.getTopGones) topGones$: Observable<Gone[]>;
  @Select(GonesState.getGones) gones$: Observable<Gone[]>;
  isAsideOpened: boolean;
  selectedGone: Gone | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadGones());
    this.store.dispatch(new LoadTopGones());
  }

  deleteGone(gone: Gone): void {
    this.store.dispatch(new DeleteGone(gone.id));
  }

  updateGone(gone: Gone): void {
    this.store.dispatch(new UpdateGone(gone));
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
