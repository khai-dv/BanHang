import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AppGlobals } from '../app.globals';
import * as EXL from 'ts-xlsx';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    providers: [ProductService] 
})

export class AdminComponent implements OnInit {  

  errorMessage: string;
  products: IProduct[] ;
  newproduct: IProduct;

  constructor(private _productService: ProductService,
              public mygb : AppGlobals) {
                
    this.mygb.shareObj['namepage']='admin';
  }

  public ImportProducts():void{
    
    this.DeleteAll();
    let wb: EXL.IWorkBook = EXL.read("../assets/data/IProduct.xlsx")
    this._productService.addItem(this.newproduct);
  }

  
  DeleteAll():void{
    this._productService.getItems()
    .subscribe(products => {
      // set items to json response
      this.products = products;
    },
      error => this.errorMessage = <any>error);
    
    this.products.forEach(element => {
      this._productService.deleteItem(element.product_id);
    });
  }

  
  ngOnInit(): void {

  }
    
}