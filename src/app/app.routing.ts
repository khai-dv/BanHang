import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './Body/body';
import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';
import { AboutUsComponent } from './About_us/about_us';


 const appRoutes: Routes = [
    { path: 'aboutUs',component: AboutUsComponent}, 
    { path: 'body', component: BodyComponent},
    //{ path: '', component: RegisterComponent},
    { path: 'productlist',component: ProductListComponent,},  
    { path: 'register',component: RegisterComponent,},  
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);

