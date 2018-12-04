import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if(array!=null){

      if(field[0]!="-"){
        
        array.sort((a: any, b: any) => {
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
      }else{
      field = field.substr(1);
          array.sort((a: any, b: any) => {
          if (a[field] < b[field]) {
            return 1;
          } else if (a[field] > b[field]) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
    return array;
  }
}