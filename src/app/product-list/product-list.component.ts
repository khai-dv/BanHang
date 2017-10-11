import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    namepage = "productlist";

    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[] ;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private router: Router,
                private productService: ProductService,
                private alertService: AlertService,
                public mygb : AppGlobals) {
                    this.mygb.shareObj['namepage']='productlist';
                }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    ngOnInit(): void {
        this.productService.getItems()
                .subscribe(products => {
                    // set items to json response
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error => {
                    this.alertService.error(error);
                });
    }

    gotoProductList(): void {
        this.router.navigate(['productlist']);
    }
}