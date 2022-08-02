import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './main-portal/cart/cart.component';
import { ContactComponent } from './main-portal/contact/contact.component';
import { HomeComponent } from './main-portal/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
