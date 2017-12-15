import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';

import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';

import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService, CartshopService, AlertService]
})


export class ProductListComponent implements OnInit {

    public products: IProduct[];
    public pro_carts: ICart[];

    constructor(private router: Router,
        private productService: ProductService,
        private _cartService: CartshopService,
        private alertService: AlertService,
        public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'productlist';
    }
    ngOnInit(): void {
        this.productService.getItems()
            .subscribe(products => {
                // set items to json response
                this.products = products;
             }, error => {this.alertService.error(error);});

        this._cartService.getItems()
            .subscribe(pro_carts => {
                this.pro_carts = pro_carts;
            }, error => { this.alertService.error(error); });
    }
    // public viewDetails(id:number){

    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             "itemsearch": id,
    //         }
    //       };
    //       this.router.navigate(["productDetails"], navigationExtras); 
    // }
    addCart(id: number) {
        var index = this.products.map(item => {
            return item.product_id;
        }).indexOf(id);

        var pro_arr = this.products[index];
        var cart_arr = this.pro_carts[index];

        cart_arr.product_id = pro_arr.product_id;
        cart_arr.product_name = pro_arr.product_name;	
        cart_arr.price = pro_arr.price;
        cart_arr.imageUrl = pro_arr.imageUrl;
        cart_arr.product_detail = pro_arr.product_detail;
        cart_arr.quality = 1;
        cart_arr.total = pro_arr.price;

        console.log(pro_arr);
        console.log(cart_arr);
        this._cartService.addItem(cart_arr)
            .subscribe(res => {
                // console.log(cart_arr)
                if (res) { }
        })
        

        // window.location.reload();
        // this.router.navigate(['/header']);
        // this.mygb.shareObj['namepage']='index';
    } 
}