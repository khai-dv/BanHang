import { Component, Input } from '@angular/core';
import { IProduct } from '../defines/product.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {  
    @Input() product: IProduct;
}

