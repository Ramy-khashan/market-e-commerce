import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginReferanceComponent } from './components/login-referance/login-referance.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductShapeComponent } from './components/product-shape/product-shape.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    LoginReferanceComponent,
    FooterComponent,
    ProductShapeComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    ButtonModule  ,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    LoginReferanceComponent,
    FooterComponent,
    ProductShapeComponent
  ],
  providers: [RouterModule],
})
export class SharedModule { }
