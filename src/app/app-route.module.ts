import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewPaymentComponent } from "./newPayments/newPayments.component";
import { CreditCardComponent } from "./creditCard/creditCard.component";
import { PaymentSummaryComponent } from "./paymentSummary/paymentSummary.component";
import { PaymentReceiptComponent } from "./paymentReceipt/paymentReceipt.component";

@NgModule({
    exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routes: Routes = [{ path: '', component: NewPaymentComponent },
{ path: 'CreditCard', component: CreditCardComponent },
{ path: 'PaymentSummary', component: PaymentSummaryComponent },
{ path: 'PaymentReceipt', component: PaymentReceiptComponent }];