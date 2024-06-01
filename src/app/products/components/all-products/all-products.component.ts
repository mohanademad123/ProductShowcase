import { Iproduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {


  products: Iproduct[] = [];
  categories: string[] = [];
  loading: boolean = true;
  CartProducts:any[] = [];
  constructor(public serivce: ProductsService) {}
  ngOnInit(): void {
    this.getProdocts();
    this.getCategories();
  }
  getProdocts() {
    this.loading = false;
    this.serivce.getAllproducts().subscribe(
      (res: any) => {
        this.loading = true;
        this.products = res;
        console.log(res)
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  getCategories() {
    this.loading = false;
    this.serivce.getAllCatogerise().subscribe(
      (res: any) => {
        this.loading = true;
        this.categories = res;
        console.log(res);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  filterCategory(event: any) {
    this.loading = false;
    let value = event.target.value;
    this.serivce.getproductbyCatogires(value).subscribe(

      (res: any) => {
        this.loading = true;
        value == 'all' ? this.getProdocts() : (this.products = res);
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  addToCart(event:any){
    if("cart" in localStorage) {
      this.CartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.CartProducts.find(item => item.item.id == event.item.id);
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.CartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.CartProducts))
      }
    } else {
      this.CartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.CartProducts))
    }
  }

}
