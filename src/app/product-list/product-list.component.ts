import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService, AlertService]
})


export class ProductListComponent implements OnInit {

    public products: IProduct[];

    constructor(private router: Router,
        private productService: ProductService,
        private alertService: AlertService,
        public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'productlist';
    }
    ngOnInit(): void {
        this.productService.getItems()
            .subscribe(products => {
                // set items to json response
                this.products = products;
            },
            error => {
                this.alertService.error(error);
            });
    }
    // public viewDetails(id:number){

    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             "itemsearch": id,
    //         }
    //       };
    //       this.router.navigate(["productDetails"], navigationExtras); 
    // }
}