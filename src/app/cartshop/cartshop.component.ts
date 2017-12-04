import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { CartshopService } from '../services/cartshop.service';
import { AppGlobals } from '../app.globals';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'cartshop',
    templateUrl: './cartshop.component.html',
    providers: [CartshopService] 
})

export class CartshopComponent implements OnInit {  

  errorMessage: string;
  products: IProduct[] ;
  TotalItem: number;
  keysearch :string;
  constructor(private _cartshopService: CartshopService) {}

  ngOnInit(): void {
    this.LoadData();
  }

  Delete(id:number){
    this._cartshopService.Delete(id)
        .subscribe(res =>{
            if(res){
                this.LoadData();
            }
        })
  }

  LoadData(){
    this.keysearch=document.getElementById('model_account').innerHTML;
    this._cartshopService.Search(this.keysearch.trim())
        .subscribe((res:any) =>{
            this.products = res;
            this.TotalItem = this.products.length;
        },error => this.errorMessage = <any>error);
  }
}