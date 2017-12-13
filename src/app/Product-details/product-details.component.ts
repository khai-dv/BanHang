// import {Component, Input} from '@angular/core';
// import { IProduct } from '../defines/product.interface';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html'
// })
// export class ProductDetailsComponent {
//   @Input() product: IProduct;
// }
import { DecimalPipe } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AppGlobals } from '../app.globals';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    public product: any = {};
    public productID: number;
    errorMessage: string;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private ac_route: ActivatedRoute,
        private productService: ProductService,
        public mygb: AppGlobals) {

        this.mygb.shareObj['namepage'] = 'productDetails';
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.productID = +params['id'];
            this.getProduct(this.productID);
        });
    }
    
    getProduct(id: number) {
        this.productService.getItem(id).subscribe(
            product => {
                this.product = product
            },
            error => this.errorMessage = <any>error);
    }
}