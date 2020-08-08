import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartList;
  constructor(private appDataService: AppDataService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.appDataService.cartItem;
  }

  goToProducts() {
    this.router.navigate(['products']);
  }
}
