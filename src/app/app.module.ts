import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from "./gones/dashboard/dashboard.component";
import {GonesManagementComponent} from "./gones/gones-management/gones-management.component";
import {GoneDetailComponent} from "./gones/gone-detail/gone-detail.component";
import {MessagesComponent} from "./gones/messages/messages.component";
import {GoneSearchComponent} from "./gones/gone-search/gone-search.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    GonesManagementComponent,
    GoneDetailComponent,
    MessagesComponent,
    GoneSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



