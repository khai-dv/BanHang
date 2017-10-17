import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    providers: [ProductService, AlertService],
})


export class SearchComponent implements OnInit {  

    public itemsearch : string;
    products: IProduct[] ;


    constructor(private router: Router,
                private ac_route: ActivatedRoute,
                private productService: ProductService,
                private alertService: AlertService,
                public mygb : AppGlobals) {
                    this.mygb.shareObj['namepage']='search';

                    this.ac_route.queryParams.subscribe(params => {
                    this.itemsearch = params["itemsearch"];
                    });
                }
    

    
    ngOnInit(): void {
        console.log("ngOnInit");
        this.productService.getItems()
                .subscribe(products => {
                    // set items to json response
                    this.products = products;
                },
                error => {
                    this.alertService.error(error);
                });
    }
}