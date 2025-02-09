import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../interfaces/http';

@Pipe({
  name: 'popular',
  standalone: true,
})
export class PopularPipe implements PipeTransform {
  transform(products: IProducts[]): IProducts[] {
    return products.filter((product) => product?.popular === true);
  }
}
