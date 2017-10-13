import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './Body/body';
import { ProductListComponent } from './product-list/index';
import { ThreeColComponent } from './Products/three-col.component';
import { FourColComponent } from './Products/four-col.component';
import { ProductDetailsComponent } from './Product-details/product-details.component';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/index';
import { AboutUsComponent } from './About_us/about_us';


 const appRoutes: Routes = [
    { path: '', component: BodyComponent},
    { path: 'aboutUs',component: AboutUsComponent}, 
    { path: 'body', component: BodyComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'three-col',component: ThreeColComponent,},  
    { path: 'four-col',component: FourColComponent,},  
    { path: 'products',component: ProductDetailsComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: 'contact',component: ContactComponent,},  
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);

