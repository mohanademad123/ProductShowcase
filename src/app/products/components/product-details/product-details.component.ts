import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  id:any
  data:any = {}
  loading:boolean = false
  constructor(private route:ActivatedRoute , private service:ProductsService) {
   this.id = this.route.snapshot.paramMap.get("id")
   console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.loading = true
    this.service.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res;
    } ,error => {
      this.loading = false
      alert(error)
    })
  }
}
