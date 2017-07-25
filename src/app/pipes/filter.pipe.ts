import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // it will be updated whenever some data changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propName: string): any {
    if (value.length === 0 || filter === '' || filter === null || !filter) { return value; }

    const resultArray = [];
    for (let item of value) {
      if (item[propName].indexOf(filter) >= 0) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
