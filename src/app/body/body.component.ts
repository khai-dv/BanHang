import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  providers: [ProductService, AlertService]
})

export class BodyComponent {
  public products: IProduct[];
  
  constructor(private router: Router,
      private productService: ProductService,
      private alertService: AlertService,
      public mygb: AppGlobals) {
      // this.mygb.shareObj['namepage'] = 'index';
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
}