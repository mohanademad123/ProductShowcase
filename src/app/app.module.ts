import { UserProductsModule } from './user-products/user-products.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserCartsModule } from './user-carts/user-carts.module';


@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        SharedModule,
        CartsModule,
        UserProductsModule,
        UserCartsModule,
        ProductsModule]
})
export class AppModule {}
