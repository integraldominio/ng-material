import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'fillZeroMask' })
export class PreencheZeroPipe implements PipeTransform {

    transform(value: string) {
       if (value) {
          const nr =  parseInt(value, 10);
          const zeros = '0000000000000000';
          const sign = nr >= 0 ? '+' : '-';
          const numberString = zeros + Math.abs(nr).toFixed(2);
          return sign + numberString.slice(-20);
      }
      return value;
    }

}
