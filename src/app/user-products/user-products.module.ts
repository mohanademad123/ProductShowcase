import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprdDetailsComponent } from './components/userprd-details/userprd-details.component';
import { UserAllProductsComponent } from './components/user-all-products/user-all-products.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserprdDetailsComponent,
    UserAllProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
   HttpClientModule,
   RouterModule
  ],
  exports:[
    UserprdDetailsComponent,
    UserAllProductsComponent
  ]
})
export class UserProductsModule { }
