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
  }

  LoadData(){
    this._cartService.getItems()
      .subscribe(pro_carts => {
        // set items to json response
        this.pro_carts = [];
        this.pro_carts = pro_carts;
        this.TotalItem = pro_carts.length;
        for(let i of pro_carts){
          this.Money=this.Money + i.total
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
    
    //document.getElementById('total_money').innerHTML=this.total_money;
    // ---------------------------------------------------

    this._cartService.getItem(id)
      .subscribe(pro => {
        // set items to json response
        this.pduct.product_id =id;
        // this.pduct.product_name = pro.product_name;
        // this.pduct.price = pro.price;
        // this.pduct.imageUrl = pro.imageUrl;
        // this.pduct.product_detail = pro.product_detail;

        this.pduct.quality = amount;
        this.pduct.total = this.total;

      }, error => this.errorMessage = <any>error);
    //------------

    // this.Delete(id);
    // this._cartService.addItem(this.pduct).subscribe(res =>{
    //         if(res){
    //             this.LoadData();
    //         }
    //     }); 

    this._cartService.editItem(id,this.pduct)
    .subscribe(res =>{
      console.log(this.pduct)
      this.LoadData();
        // if(res){
        //     this.LoadData();
        // }
    })

  }
}