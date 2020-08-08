import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchVal = '';
  @Output() searchResponse: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchChanged() {
    this.searchResponse.emit(this.searchVal);
  }
}
