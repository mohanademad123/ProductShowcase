import {HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AllProductsComponent, ProductDetailsComponent, ProductComponent],
    imports: [CommonModule,CommonModule, RouterModule,FormsModule, HttpClientModule, SharedModule],
  exports: [AllProductsComponent,SharedModule,ProductComponent, RouterModule, ProductDetailsComponent,FormsModule]
})
export class ProductsModule {}
