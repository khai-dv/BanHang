import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer';
import { ClientsComponent } from './Footer/clients';
import { HeaderComponent } from './Header/header';
import { UpperComponent } from './Header/upper.header';
import { AboutUsComponent } from './About_us/about_us';
import { ProductsComponent } from './Products/products.component';
import { ProductDetailsComponent } from './Product_details/product_details.component';
import { CartComponent } from './Cart/cart.component';
import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';
import { BodyComponent } from './Body/body';
import { SidebarComponent } from './Body/sidebar';
import { AppGlobals } from './app.globals';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClientsComponent,
    HeaderComponent, UpperComponent,    
    AboutUsComponent,
    ProductsComponent, 
    ProductDetailsComponent, 
    CartComponent,
    ProductListComponent,
    RegisterComponent,
    BodyComponent, SidebarComponent, 
    //ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
