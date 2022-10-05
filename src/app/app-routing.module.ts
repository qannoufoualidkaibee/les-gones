import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GonesComponent} from "./gones/gones.component";

const routes: Routes = [
  { path: '', redirectTo: '/gones', pathMatch: 'full' },
  { path: 'gones', component: GonesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



