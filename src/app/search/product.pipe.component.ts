import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../defines/product.interface';

@Pipe({ name: 'productfilter',
        pure: false  })
export class ProductFilterPipe implements PipeTransform{
    transform(value : IProduct[], args : string) : IProduct[]{
      if (!value)
          return value;
      return value.filter( function(pro){
        return pro.product_name.toLowerCase().includes(args.toLowerCase());
      })
    }
}