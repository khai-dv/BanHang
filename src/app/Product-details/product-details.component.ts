import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';

import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';

import { AppGlobals } from '../app.globals';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    providers: [ProductService, CartshopService]
})
export class ProductDetailsComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    public product: any = {};
    public productID: number;
    errorMessage: string;

    products: IProduct[];
    pro_carts: ICart[];

    constructor(private route: ActivatedRoute,
        private router: Router,
        private ac_route: ActivatedRoute,
        private productService: ProductService,
        private _cartService: CartshopService,
        public mygb: AppGlobals) {

        this.mygb.shareObj['namepage'] = 'productDetails';
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.productID = +params['id'];
            this.getProduct(this.productID);
        });
        this.loadproduct();
    }
    
    getProduct(id: number) {
        this.productService.getItem(id).subscribe(
            product => {
                this.product = product
            }, error => this.errorMessage = <any>error); 
    }
    // -------------------------
     public loadproduct(): void{
        this.productService.getItems()        
        .subscribe(products => {                
            this.products = products;                
        },error => this.errorMessage = <any>error);  

        this._cartService.getItems()        
        .subscribe(pro_carts => {                
            this.pro_carts = pro_carts;               
        },error => this.errorMessage = <any>error);                                                                                                                                                                                 
    }

    addCart(id: number) {
        var index = this.products.map(item => {
            return item.product_id;
        }).indexOf(id);

        var pro_arr = this.products[index];
        var cart_arr = this.pro_carts[index];
        console.log(pro_arr);
        console.log(cart_arr);
        cart_arr.product_id = pro_arr.product_id;
        cart_arr.product_name = pro_arr.product_name;	
        cart_arr.price = pro_arr.price;
        cart_arr.imageUrl = pro_arr.imageUrl;
        cart_arr.product_detail = pro_arr.product_detail;
        cart_arr.quality = 1;
        cart_arr.total = pro_arr.price;

        this._cartService.addItem(cart_arr)
            .subscribe(res => {
                if (res) { }
        })

        // window.location.reload();
    } 
}