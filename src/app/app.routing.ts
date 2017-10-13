import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';


 const appRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    //{ path: 'home', component: HomeComponent},
    { path: '', component: RegisterComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);

