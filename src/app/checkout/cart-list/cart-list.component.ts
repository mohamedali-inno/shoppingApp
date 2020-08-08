import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  discountedPrice = 0;
  totalPrice = 0;
  discount = 10;
  constructor(public appDataService: AppDataService) {}

  ngOnInit(): void {}

  trackByFn(index, item) {
    return item.count; // or item.id
  }
}
