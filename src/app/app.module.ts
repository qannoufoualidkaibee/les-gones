import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {GonesModule} from "./gones/gones/gones.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GonesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



