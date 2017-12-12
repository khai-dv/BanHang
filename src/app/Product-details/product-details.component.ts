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

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    productID: any;
    // product: any = {};
    imageUrl: string;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private ac_route: ActivatedRoute,
        private productService: ProductService,
        public mygb: AppGlobals) {

        this.mygb.shareObj['namepage'] = 'productlist';
        this.ac_route.queryParams.subscribe(params => {
            this.productID = params["product_id"];
        });
    }

    ngOnInit(): void {
        this.getProduct(this.productID);
        console.log("onInit" + this.product);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: any) {
        this.productService.getItem(id).subscribe(
            product => {
                console.log(product);
                this.product = product
            },
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Product Detail: ' + message;
    // }
}