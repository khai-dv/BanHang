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
export class ProductDetailsComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    public product: any={};
    public productID: number;
    // product: any = {};
    // imageUrl: string;
    errorMessage: string;
    // private sub: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private ac_route: ActivatedRoute,
        private productService: ProductService,
        public mygb: AppGlobals) {

        this.mygb.shareObj['namepage'] = 'productDetails';

        this.ac_route.queryParams.subscribe(params => {
            this.productID = parseInt( params["itemsearch"]);
            // alert("AAA" + this.productID);
            this.getProduct(this.productID);
            });
    }
    ngOnInit(): void {
        
        // this.sub = this.route.params.subscribe(params => {
        //     console.log(this.productID);
        //     this.getProduct(this.productID);
        // });

        this.getProduct(this.productID);
    }


    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }



    getProduct(id: number) {
        this.productService.getItem(id).subscribe(
            product => {
                console.log(product);
                this.product = product
            },
            error => this.errorMessage = <any>error);
    }

    // onBack(): void {
    //     this.router.navigate(['/products']);
    // }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Product Detail: ' + message;
    // }
}