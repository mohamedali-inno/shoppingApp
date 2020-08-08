import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-cartitem-change',
  templateUrl: './cartitem-change.component.html',
  styleUrls: ['./cartitem-change.component.scss']
})
export class CartitemChangeComponent implements OnInit {
  constructor(public appDataService: AppDataService) {}

  ngOnInit(): void {}

  trackByFn(index, item) {
    return item.count; // or item.id
  }

  addItem(cartItem) {
    // cartItem = cartItem + 1;
    this.appDataService.addItem(cartItem);
  }

  removeItem(cartItem) {
    // cartItem = cartItem - 1 <= 0 ? 0 : cartItem - 1;
    this.appDataService.removeItem(cartItem);
  }
}
