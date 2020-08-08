import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartitemChangeComponent } from './cartitem-change/cartitem-change.component';


@NgModule({
  declarations: [CheckoutComponent, CartListComponent, CartitemChangeComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
