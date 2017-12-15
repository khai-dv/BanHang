import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';
import * as glo from '../app.globals';

@Component({
    selector: 'app-product-favorite',
    templateUrl: './product-favorite.component.html',
    styleUrls:['./product-favorite.component.css'],
    providers: [ProductService, CartshopService, AlertService]
})

export class ProductFavoriteComponent implements OnInit {

    public products: IProduct[];
    pro_carts: ICart[];
    public product: any = {};
    errorMessage: string;
    public productID: number;

    constructor(private router: Router,
        private productService: ProductService,
        private alertService: AlertService,
        private _cartService: CartshopService,
        public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'productfavorite';
    }
    ngOnInit(): void {
        this.productService.getItems()
            .subscribe(products => {
                this.products = products;
            }, error => { this.alertService.error(error); });

        this._cartService.getItems()
            .subscribe(pro_carts => {
                this.pro_carts = pro_carts;
            }, error => { this.alertService.error(error); });
    }

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

        this._cartService.addItem(cart_arr)
            .subscribe(res => {
                // console.log(cart_arr)
                if (res) { }
            alert("Đã thêm thành công vào giỏ hàng")
        })

        // window.location.reload();
        // this.router.navigate(['/header']);
        // this.mygb.shareObj['namepage']='index';
    } 

    getProduct(id: number) {
        document.getElementById('id01').style.display='block';
        this.product="";
        this.productService.getItem(id).subscribe(
            product => {
                this.product = product;
            },
            error => this.errorMessage = <any>error);
    }
}