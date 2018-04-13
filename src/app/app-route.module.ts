import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import { HeaderComponent } from "./header/header.component";
@NgModule({
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}
export const routes:Routes=[{ path:'NewPayments', component:HeaderComponent }];