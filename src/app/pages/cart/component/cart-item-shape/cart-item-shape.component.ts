import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-shape',
  templateUrl: './cart-item-shape.component.html',
  styleUrls: ['./cart-item-shape.component.scss']
})
export class CartItemShapeComponent {
@Input()item;
onDelete(){}
}
