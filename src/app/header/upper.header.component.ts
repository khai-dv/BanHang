import { Component, OnInit } from '@angular/core';

import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper.header.component.html',
  providers: [CartshopService]
})

export class UpperComponent implements OnInit {

  errorMessage: string;
  pro_carts: ICart[];
  totalCart: number;
  totalCurrency:number=0;

  constructor(private _cartService: CartshopService,
    public mygb: AppGlobals) {
    this.mygb.shareObj['namepage'] = 'upper_header';
  }

  ngOnInit(): void {
    this._cartService.getItems()
      .subscribe(pro_carts => {
        this.pro_carts = pro_carts;
        this.totalCart = pro_carts.length;
        this.totalCurrency = 0;
        for(let i of pro_carts){
          this.totalCurrency = this.totalCurrency + i.total;
        }        
      },
      error => this.errorMessage = <any>error);

  }
}