import { Iproduct } from './../../../products/models/iproduct';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProductsService } from '../../services/user-products.service';


@Component({
  selector: 'app-user-all-products',
  templateUrl:'./user-all-products.component.html',
  styleUrls: ['./user-all-products.component.scss']
})
export class UserAllProductsComponent {
  products:Iproduct[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup
  constructor(private service:UserProductsService , private build:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['' , [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
     } , error => {
      alert( error)
     })
  }

  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }


  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
       console.log(this.base64)
    };
  }


  addProduct() {
    const model = this.form.value
    this.service.createProduct(model).subscribe(res => {
      alert("Add Product Success")
    })
  }

  update(item:any) {
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category
    })
    this.base64 = item.image
  }
}
