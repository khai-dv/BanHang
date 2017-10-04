import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer';
import { ClientsComponent } from './Footer/clients';
import { HeaderComponent } from './Header/header';
import { UpperComponent } from './Header/upper.header';
import { AboutUsComponent } from './About_us/about_us';
import { BodyComponent } from './Body/body';

// import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClientsComponent,
    HeaderComponent,
    UpperComponent,
    BodyComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
