import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRange'
})
export class FilterRangePipe implements PipeTransform {
  transform(
    list: any,
    property?: string,
    startRange?: any,
    endRange?: any
  ): any {
    console.log('startRange', startRange);
    return list.filter(
      item => item[property] >= startRange && item[property] <= endRange
    );
  }
}
