import { UsercartService } from './../../services/usercart.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProductsService } from 'src/app/user-products/services/user-products.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.scss']
})
export class UsercartComponent {
  constructor(private service:UsercartService , private build:FormBuilder , private productService:UserProductsService) {
  }
  carts:any[] = [];
  products:any[] = [];
  total = 0
  form!:FormGroup;
  details:any;
  ngOnInit(): void {
   this.form = this.build.group({
     start: [''],
     end:['']
   })
    this.getAllCarts()
  }



  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }

  applyFilter() {
    let date = this.form.value
    console.log(date);
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    })
  }

  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }


  view(index:number) {
    this.products = []
    this.details = this.carts[index];
    for(let x in this.details.products) {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({item: res , quantity:this.details.products[x].quantity})
      })
    }
  }
}
