import { Component, Input, ViewChild } from '@angular/core';
import { IProduct } from '../defines/product.interface';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {  
    @Input() product: IProduct;
}

