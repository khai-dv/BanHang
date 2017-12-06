import { Component, OnInit } from '@angular/core';
import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-type-product',
    templateUrl: './type.product.component.html',
    providers: [ProductService]
})

export class TypeProductComponent implements OnInit {

    errorMessage: string;
    products: IProduct[];
    public filteredProducts: IProduct[];

    public product_type_value: number;    

    constructor(private _productService: ProductService,
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
        },
        error => this.errorMessage = <any>error); 
    }

    ngOnInit(): void {
        this.FilterProdcuts();
    }

}