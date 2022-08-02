import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-portal/header/header.component';
import { FooterComponent } from './main-portal/footer/footer.component';
import { HomeComponent } from './main-portal/home/home.component';
import { AboutComponent } from './main-portal/about/about.component';
import { ContactComponent } from './main-portal/contact/contact.component';
import { ProductComponent } from './main-portal/product/product.component';
import { CartComponent } from './main-portal/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
