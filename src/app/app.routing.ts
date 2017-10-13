import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './Body/body';
import { ProductListComponent } from './product-list/index';
import { ThreeColComponent } from './Products/three-col.component';
import { FourColComponent } from './Products/four-col.component';
import { ProductDetailsComponent } from './Product-details/product-details.component';
import { CartComponent } from './Cart/cart.component';
import { RegisterComponent } from './register/index';
import { AboutUsComponent } from './About_us/about_us';

 const appRoutes: Routes = [
    { path: 'aboutUs',component: AboutUsComponent}, 
    { path: 'body', component: BodyComponent},
    //{ path: '', component: RegisterComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'three-col',component: ThreeColComponent,},  
    { path: 'four-col',component: FourColComponent,},  
    { path: 'products',component: ProductDetailsComponent,},  
    { path: 'cart',component: CartComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

