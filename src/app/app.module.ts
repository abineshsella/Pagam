import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaymentManagerComponent } from './paymentManager/paymentManager.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {routes} from "./app-route.module"
import { NewPaymentComponent } from './newPayments/newPayments.component';
import { CreditCardComponent } from './creditCard/creditCard.component';
import { PaymentSummaryComponent } from './paymentSummary/paymentSummary.component';
import { PaymentReceiptComponent } from './paymentReceipt/paymentReceipt.component';
import { PaymentListComponent } from './paymentList/paymentList.component';



@NgModule({
  declarations: [
     AppComponent,
    HeaderComponent,
    PaymentManagerComponent,
    NewPaymentComponent,
     CreditCardComponent,
    PaymentSummaryComponent,
    PaymentReceiptComponent,
    PaymentListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
