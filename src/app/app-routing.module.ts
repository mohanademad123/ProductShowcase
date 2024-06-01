import { UserAllProductsComponent } from './user-products/components/user-all-products/user-all-products.component';

import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercartComponent } from './user-carts/components/usercart/usercart.component';

const routes: Routes = [
{path:"carts", component:CartComponent},
{path:"details/:id", component:ProductDetailsComponent},
{path:"products", component:AllProductsComponent},
{path:"details", component:ProductDetailsComponent},
{path:"usercarts", component:UsercartComponent},

{path:"userAll", component:UserAllProductsComponent},

{path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
