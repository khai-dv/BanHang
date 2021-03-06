import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { BodyComponent } from './body/index';
import { ProductListComponent } from './product-list/index';
import { TypeProductComponent, GeneralContentComponent } from './products/index';
import { ProductDetailsComponent } from './product-details/index';
import { CartComponent } from './cart/index';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/index';
import { AboutUsComponent } from './about-us/index';
import { SearchComponent } from './search/index';
import { LoginComponent } from './login/index';
import { AdminComponent } from './admin/index';
import { ProductFavoriteComponent } from './product-favorite/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'body', component: BodyComponent },
    { path: 'productlist', component: ProductListComponent, },
    { path: 'productfavorite', component: ProductFavoriteComponent, },
    { path: 'products/:id',component: ProductDetailsComponent,},
    { path: 'typeProduct', component: TypeProductComponent, },
    { path: 'productDetails', component: ProductDetailsComponent, },
    { path: 'cart', component: CartComponent, },
    { path: 'register', component: RegisterComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'search', component: SearchComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'generalContent', component: GeneralContentComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

