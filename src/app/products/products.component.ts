import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { Options } from 'ng5-slider';
import { FormGroup, FormControl } from '@angular/forms';
import { FILTER_START_RANGE, FILTER_END_RANGE } from '../app.constants';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  minVal = FILTER_START_RANGE;
  maxVal = FILTER_END_RANGE;
  sortOrder = 'asc';
  sortProperty = 'name';
  selectedValue;
  selectList = [
    { label: 'Sort by name Asc', value: 'SORT_BY_NAME_ASC' },
    { label: 'Sort by name Desc', value: 'SORT_BY_NAME_DES' },
    { label: 'Sort by price HTL', value: 'SORT_BY_PRICE_HTL' },
    { label: 'Sort by name LTH', value: 'SORT_BY_PRICE_LTH' }
  ];
  userFilter: any = { name: '' };

  constructor(
    private productsService: ProductsService,
    private appDataService: AppDataService
  ) {}

  ngOnInit(): void {
    this.selectedValue = this.selectList[0].value;
    this.productsService.getProducts().subscribe(
      (response: any) => {
        this.products = response;
      },
      error => {
        console.log('get products error', error);
      }
    );
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  updateFilterVal(filter) {
    this.minVal = filter.minVal;
    this.maxVal = filter.maxVal;
  }

  sortVal(sortVal) {
    console.log('chk');
    switch (this.selectedValue) {
      case 'SORT_BY_NAME_ASC':
        this.sortOrder = 'asc';
        this.sortProperty = 'name';
        break;
      case 'SORT_BY_NAME_DES':
        this.sortOrder = 'desc';
        this.sortProperty = 'name';
        break;

      case 'SORT_BY_PRICE_HTL':
        this.sortOrder = 'desc';
        this.sortProperty = 'price';
        break;

      case 'SORT_BY_PRICE_LTH':
        this.sortOrder = 'asc';
        this.sortProperty = 'price';
        break;
    }
  }

  updateSearchVal(searchVal) {
    this.userFilter.name = searchVal;
  }

  addToCart(product) {
    this.appDataService.addItem(product);
    // this.appDataService.cartList[product.id] = {
    //   ...product,
    //   count: (product.count && product.count + 1) || 1
    // };
  }
}
