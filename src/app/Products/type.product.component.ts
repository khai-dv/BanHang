import { Component, OnInit } from '@angular/core';
import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AppGlobals } from '../app.globals';
import * as glo from '../app.globals';

@Component({
    selector: 'app-type-product',
    templateUrl: './type.product.component.html',
    providers: [ProductService]
})

export class TypeProductComponent implements OnInit {

    errorMessage: string;

    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    product_type_value: number;    

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private _productService: ProductService,
        public mygb: AppGlobals) {
        this.mygb.shareObj['namepage'] = 'typeProduct';  
        this.product_type_value=glo.Type_value;      
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
                // this.product_type_value=this.product_type.value_type;
                // alert(this.product_type.value_type);
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

}