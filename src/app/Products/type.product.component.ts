import { Component, OnInit } from '@angular/core';
import { IProduct } from '../defines/product.interface';
import { ICart } from '../defines/cart.interface';
import { CartshopService } from '../services/cartshop.service';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-type-product',
    templateUrl: './type.product.component.html',
    providers: [ProductService, CartshopService]
})

export class TypeProductComponent implements OnInit {

    errorMessage: string;
    products: IProduct[];
    pro_carts: ICart[];

    public filteredProducts: IProduct[];

    public product_type_value: number;    

    constructor(private _productService: ProductService,
                private _cartService: CartshopService,
                private ac_route: ActivatedRoute,
                public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'typeProduct';  

        this.ac_route.queryParams.subscribe(params => {
            this.product_type_value = parseInt( params["itemsearch"]);
            this.FilterProdcuts();
            });
    }

    public FilterProdcuts(): void{
        this._productService.getItems()        
        .subscribe(products => {                
            this.products = products;                
            this.filteredProducts = this.products.filter(data=>data.product_type===this.product_type_value);
        },error => this.errorMessage = <any>error);  

        this._cartService.getItems()        
        .subscribe(pro_carts => {                
            this.pro_carts = pro_carts;               
        },error => this.errorMessage = <any>error);                                                                                                                                                                                 
    }

    ngOnInit(): void {
        this.FilterProdcuts();
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
    } 
}