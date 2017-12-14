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
  public filteredICarts: ICart[];
  TotalItem: number;
  Money:number=0;
  total_money:string;
  total:number;
  pduct:any={};

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
    // this.Money = 0;
    // for(var i = 0; i< this.TotalItem ;i++){
    //       this.Money = this.Money + this.pro_carts[i].total;
    // }
  }

  LoadData(){
    this._cartService.getItems()
      .subscribe(pro_carts => {
        // set items to json response
        this.pro_carts = [];
        this.pro_carts = pro_carts;
        this.TotalItem = pro_carts.length;
        this.Money = 0;
        for(let i of pro_carts){
          this.Money = this.Money + i.total;
        }        
      },
      error => this.errorMessage = <any>error);

     
  }
  // -------------------------------------------------
  
  Delete(id:number){
    this._cartService.Delete(id)
        .subscribe(res =>{
            if(res){
                this.LoadData();
            }
        })
  }

  Cash(amount:number, price:number, id: number){
    this.total= amount * price;
    this.total_money = "$" + this.total
    // --------------------------------------------
    var index = this.pro_carts.map(item =>{
      return item.product_id;
    }).indexOf(id);

    var cart_arr = this.pro_carts[index];
    console.log(cart_arr);

    cart_arr.quality = amount;
    cart_arr.total = this.total;
    console.log(cart_arr.total );

    this.Money = 0;
    this.pro_carts.map(item =>{
      this.Money = this.Money + item.total;
    })

    this._cartService.editItem(id,cart_arr)
    .subscribe(res =>{
      console.log(cart_arr)
        if(res){}
    })
  }
}