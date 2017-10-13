import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    providers: [ProductService] 
})

export class CartComponent implements OnInit {  

  errorMessage: string;

  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] ;
  TotalItem: number;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private _productService: ProductService) {
      
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
            product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  ngOnInit(): void {
    this._productService.getItems()
    .subscribe(products => {
      // set items to json response
      this.products = products;
      this.filteredProducts = this.products;
      this.TotalItem = products.length;
    },
      error => this.errorMessage = <any>error);
  }
    
}