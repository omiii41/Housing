import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any[], filterstring: string, propName: string): any[] {
    const resultArray = [];
    if (value.length === 0 || filterstring === '' || propName === ''){
      return value;
    }

    for (const item of value){
      if (item[propName] === filterstring){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
