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

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    //product: IProduct;
    @Input() product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this.productService.getItem(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}