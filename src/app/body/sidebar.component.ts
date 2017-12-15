import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [ProductService, AlertService]
})

export class SidebarComponent implements OnInit {
  public products: IProduct[];

  constructor(private router: Router,
    private productService: ProductService,
    private alertService: AlertService) { }

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

  public gotoSearch_SP(value: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "itemsearch": value,
      }
    };
    this.router.navigate(["typeProduct"], navigationExtras);
  }

}

