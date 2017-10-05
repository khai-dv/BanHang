import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/index';
import { ProductListComponent } from './product-list/index';

export const appRoutes: Routes = [
    //{ path: '', component: HomeComponent},
    //{ path: 'home', component: HomeComponent},
    { path: '', component: ProductListComponent},
    { path: 'product-list',component: ProductListComponent,},  

    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes,
      { enableTracing: true }) // <-- debugging purposes only);
