import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { FooterComponent, ClientsComponent  } from './footer/index';
import { HeaderComponent, UpperComponent } from './header/index';
import { AboutUsComponent } from './about-us/index';
import { ProductComponent, ThreeColComponent, FourColComponent} from './products/index';
import { ProductDetailsComponent } from './product-details/index';
import { CartComponent } from './cart/index';
import { ProductListComponent } from './product-list/index';
import { RegisterComponent } from './register/index';
import { ContactComponent } from './contact/index';
import { BodyComponent, SidebarComponent } from './body/index';
import { SearchComponent } from './search/index';
import { AppGlobals } from './app.globals';
import { ProductFilterPipe } from './search/index';

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
    ThreeColComponent,
    FourColComponent,
    ProductDetailsComponent, 
    CartComponent,
    RegisterComponent,
    ContactComponent,
    BodyComponent,
    SidebarComponent,
    SearchComponent,
    ProductFilterPipe,
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
