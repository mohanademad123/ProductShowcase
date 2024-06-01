import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllproducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllCatogerise(){
    return this.http.get('https://fakestoreapi.com/products/categories');

  }
  getproductbyCatogires(kewords:string){
    return this.http.get('https://fakestoreapi.com/products/category/' + kewords)
  }
  getProductById(id:any) {
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
