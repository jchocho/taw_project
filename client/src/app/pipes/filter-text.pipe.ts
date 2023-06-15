import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: any[], filterTitle: any): any {
    if (!value) return [];
    if (!filterTitle) return value;
    filterTitle = filterTitle.toLowerCase();

    return value.filter(val => val.title.toLowerCase().includes(filterTitle))
  }

}
