import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GonesModule} from "./gones/gones.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    GonesModule,
      RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



