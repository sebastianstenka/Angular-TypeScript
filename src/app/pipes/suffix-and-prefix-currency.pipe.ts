import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffixAndPrefixCurrency'
})
export class SuffixAndPrefixCurrencyPipe implements PipeTransform {

  transform(value: unknown, prefix: string, suffix: string): unknown {
    return `${prefix} ${value} ${suffix}`;
  }

}
