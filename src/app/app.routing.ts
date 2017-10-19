import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { BodyComponent } from './body/index';
import { ProductListComponent } from './product-list/index';
import { ThreeColComponent, FourColComponent, TypeProductComponent } from './products/index';
import { ProductDetailsComponent } from './product-details/index';
import { CartComponent } from './cart/index';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/index';
import { AboutUsComponent } from './about-us/index';
import { SearchComponent } from './search/index';

 const appRoutes: Routes = [
    // { path: '', component: HomeComponent},
    { path: 'home',component: HomeComponent},
    { path: 'aboutUs',component: AboutUsComponent}, 
    { path: 'body', component: BodyComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'three-col',component: ThreeColComponent,},  
    { path: 'four-col',component: FourColComponent,},  
    { path: 'products',component: ProductDetailsComponent,}, 
    { path: 'typeProduct',component: TypeProductComponent,},          
    { path: 'cart',component: CartComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: 'contact',component: ContactComponent,},  
    { path: 'search',component: SearchComponent,},  
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: '**', redirectTo: '', pathMatch: 'full'}    
];

export const routing = RouterModule.forRoot(appRoutes);

