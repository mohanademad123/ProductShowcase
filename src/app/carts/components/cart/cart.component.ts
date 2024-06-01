import { Component } from '@angular/core';
import { CartstService } from '../../services/cartst.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private service: CartstService) {}
  cartProducts: any[] = [];
  total: number = 0;
  success: boolean = false;
  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minsAmount(index: number) {
    this.cartProducts[index].quantity--;
    if (this.cartProducts[index].quantity == 0) {
      this.cartProducts.splice(index, 1);
      this.getCartTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectChange() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });

    let Model = {
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.service.createNewCart(Model).subscribe((res: any) => {
      this.success = true;
    });

    console.log(Model);
  }
}
