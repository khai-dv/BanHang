import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-product-favorite',
    templateUrl: './product-favorite.component.html',
    providers: [ProductService, AlertService]
})


export class ProductFavoriteComponent implements OnInit {

    public products: IProduct[];

    constructor(private router: Router,
        private productService: ProductService,
        private alertService: AlertService,
        public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'productfavorite';
    }
    ngOnInit(): void {
        this.productService.getItems()
            .subscribe(products => {
                this.products = products;
            },
            error => {
                this.alertService.error(error);
            });      
    }
}