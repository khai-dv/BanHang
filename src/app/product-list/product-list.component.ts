import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { PagerService } from '../services/pager.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    providers: [ProductService] 
})


export class ProductListComponent implements OnInit {  
    
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    errorMessage: string;

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

    constructor(private _productService: ProductService, private pagerService: PagerService) {
        
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.product_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    ngOnInit(): void {
        this._productService.getItems()
                .subscribe(products => {
                    // set items to json response
                    this.products = products;
                    this.filteredProducts = this.products;

                    // initialize to page 1
                    this.setPage(1);
                },
                    error => this.errorMessage = <any>error);
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);
        console.log("Hello1");
 
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    
    
}