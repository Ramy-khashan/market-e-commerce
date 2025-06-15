import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[];
  constructor() {
    this.cartItems = [
      { image: "", title: "Test Title1", id: 122, quantity: 12, price: 1500 },
      { image: "", title: "Test Title2", id: 132, quantity: 12, price: 1200 },
      { image: "", title: "Test Title3", id: 142, quantity: 12, price: 1600 },
      { image: "", title: "Test Title4", id: 162, quantity: 12, price: 1100 },

    ]
  }
}
