import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { Angular2SocialLoginModule } from "angular2-social-login";

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { FooterComponent, ClientsComponent  } from './footer/index';
import { HeaderComponent, UpperComponent } from './header/index';
import { AboutUsComponent } from './about-us/index';
import { ProductComponent, FourColComponent, TypeProductComponent , GeneralContentComponent } from './products/index';
import { ProductDetailsComponent } from './product-details/index';
import { CartComponent } from './cart/index';
import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/index';
import { BodyComponent, SidebarComponent } from './body/index';
import { SearchComponent } from './search/index';
import { AppGlobals } from './app.globals';
import { ProductFilterPipe } from './search/index';
import { LoginComponent } from './login/index';
import { CartshopComponent } from './cartshop/index';
import { AdminComponent } from './admin/index';
import { ProductFavoriteComponent } from './product-favorite/index';

let providers = {
    "google": {
      "clientId": "GOOGLE_CLIENT_ID"
    },
    "linkedin": {
      "clientId": "LINKEDIN_CLIENT_ID"
    },
    "facebook": {
      "clientId": "FACEBOOK_CLIENT_ID",
      "apiVersion": "<version>" //like v2.4 
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ClientsComponent,
    HeaderComponent, 
    UpperComponent,    
    AboutUsComponent,
    ProductComponent, 
    ProductListComponent,
    FourColComponent,
    ProductDetailsComponent,
    TypeProductComponent,
    CartComponent,
    RegisterComponent,
    ContactComponent,
    BodyComponent,
    SidebarComponent,
    SearchComponent,
    ProductFilterPipe,
	  LoginComponent,
    GeneralContentComponent,
    CartshopComponent,
    AdminComponent,
    ProductFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    Ng2PaginationModule
  ],
  exports: [ProductFilterPipe],
  providers: [AppGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);
