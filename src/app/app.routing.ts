import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/index';
import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';

export const appRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    //{ path: 'home', component: HomeComponent},
    { path: '', component: ProductListComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
