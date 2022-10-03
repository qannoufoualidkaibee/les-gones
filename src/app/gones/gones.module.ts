import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../in-memory-data.service";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {GonesManagementComponent} from "../gones-management/gones-management.component";
import {GoneDetailComponent} from "../gone-detail/gone-detail.component";
import {GoneSearchComponent} from "../gone-search/gone-search.component";
import {AsideComponent} from "../aside/aside.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {GonesComponent} from "./gones.component";

@NgModule({
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        FormsModule,
        HttpClientModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        GonesComponent,
        DashboardComponent,
        GonesManagementComponent,
        GoneDetailComponent,
        GoneSearchComponent,
        AsideComponent
    ]
})
export class GonesModule { }



