import { Component, OnInit } from '@angular/core';

import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [CartshopService]
})

export class CartComponent implements OnInit {

  errorMessage: string;

  pro_carts: ICart[];
  TotalItem: number;

  constructor(private _cartService: CartshopService,
    public mygb: AppGlobals) {
    this.mygb.shareObj['namepage'] = 'cart';
  }

  performFilter(filterBy: string): ICart[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.pro_carts.filter((product: ICart) =>
      product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData(){
    this._cartService.getItems()
      .subscribe(pro_carts => {
        // set items to json response
        this.pro_carts = pro_carts;
        this.TotalItem = pro_carts.length;
      },
      error => this.errorMessage = <any>error);
  }
  // --------------------------------------------------

  Delete(id:number){
    this._cartService.Delete(id)
        .subscribe(res =>{
            if(res){
                this.LoadData();
            }
        })
  }
}