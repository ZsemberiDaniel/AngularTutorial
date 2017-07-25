import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], property: string): any[] {
    return value.sort((i1: any, i2: any) => {
      if (i1[property] > i2[property]) {
        return 1;
      } else if (i1[property] < i2[property]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
