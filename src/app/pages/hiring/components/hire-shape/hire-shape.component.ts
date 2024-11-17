import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hire-shape',
  templateUrl: './hire-shape.component.html',
  styleUrls: ['./hire-shape.component.scss'],
 })
export class HireShapeComponent {
@Input()hireItem:any;
}
