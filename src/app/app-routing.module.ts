import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GonesManagementComponent} from './gones/gones-management/gones-management.component';
import {GoneDetailComponent} from './gones/gone-detail/gone-detail.component';
import {DashboardComponent} from "./gones/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: GoneDetailComponent },
  { path: 'gones', component: GonesManagementComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



