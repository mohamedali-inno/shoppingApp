import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { FILTER_START_RANGE, FILTER_END_RANGE } from '../../app.constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  minValue: number = FILTER_START_RANGE;
  maxValue: number = FILTER_END_RANGE;
  minVal;
  maxVal;
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([0, 200])
  });
  options: Options = {
    floor: FILTER_START_RANGE,
    ceil: FILTER_END_RANGE,
    step: 50
  };
  @Output() filterResponse: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  minValueChange(event) {
    this.minVal = event;
  }

  maxValueChange(event) {
    this.maxVal = event;
  }

  applyFilter() {
    this.filterResponse.emit({ minVal: this.minVal, maxVal: this.maxVal });
  }
}
