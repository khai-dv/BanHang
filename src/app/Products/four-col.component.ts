import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-four-col',
    templateUrl: './four-col.component.html',
    providers: [ProductService] 
})

export class FourColComponent implements OnInit {  

  errorMessage: string;

  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] ;

  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private _productService: ProductService,
              public mygb : AppGlobals) {
                
    this.mygb.shareObj['namepage']='product-four-col';
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
    },
      error => this.errorMessage = <any>error);
  }
    
}