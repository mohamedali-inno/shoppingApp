import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private cartList = [];
  private totalPrice = 0;
  constructor() {}

  addItem(product) {
    const itemInList = this.cartList.find(item => item.id === product.id);
    if (itemInList) {
      itemInList.count = itemInList.count + 1;
    } else {
      this.cartList.push({ ...product, count: 1 });
    }
  }

  removeItem(product) {
    const itemInListIndex = this.cartList.findIndex(
      item => item.id === product.id
    );
    if (itemInListIndex !== -1) {
      this.cartList[itemInListIndex].count =
        this.cartList[itemInListIndex].count - 1 <= 0
          ? 0
          : this.cartList[itemInListIndex].count - 1;

      // if (this.cartList[itemInListIndex].count) {
      //   this.cartList.splice(itemInListIndex, 1);
      // }
    }
  }

  get itemCount() {
    const count = this.cartList.reduce((total, item) => {
      return (total = total + item.count);
    }, 0);
    return count;
  }

  get cartItem() {
    return this.cartList;
  }

  get getTotalPrice() {
    const totalPrice = this.cartItem.reduce((total, item) => {
      total = total + item.count * item.price;
      return total;
    }, 0);
    this.totalPrice = totalPrice;
    return totalPrice;
  }

  get getSubTotalPrice() {
    return Math.ceil((this.totalPrice * (100 - 10)) / 100);
  }
}
