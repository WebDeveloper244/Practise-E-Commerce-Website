import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main-portal/about/about.component';
import { CartComponent } from './main-portal/cart/cart.component';
import { ContactComponent } from './main-portal/contact/contact.component';
import { HomeComponent } from './main-portal/home/home.component';
import { ProductComponent } from './main-portal/product/product.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
