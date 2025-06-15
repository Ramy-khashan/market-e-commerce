import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PagesRoutingModule } from './pages-routing.module';
// import { HomeComponent } from './home/home.component';
import { HiringComponent } from './hiring/hiring.component';
import { ProductsComponent } from './products/products.component';
import { NotesComponent } from './notes/notes.component';
import { BranchesComponent } from './branches/branches.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './our-meals/components/header/header.component';
import { OurMealsComponent } from './our-meals/our-meals.component';
import { HireShapeComponent } from './hiring/components/hire-shape/hire-shape.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BranchShapeComponent } from './branches/components/branch-shape/branch-shape.component';
import { CartComponent } from './cart/cart.component';
import { CartItemShapeComponent } from './cart/component/cart-item-shape/cart-item-shape.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
     HiringComponent,
    ProductsComponent,
    NotesComponent,
    BranchesComponent,
    GallaryComponent,
    HeaderComponent,
    HomeComponent,
    OurMealsComponent,
    HireShapeComponent,
    ProductDetailsComponent,
    BranchShapeComponent,
    CartComponent,
    CartItemShapeComponent,
    ProfileComponent,
    

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    CardModule,
    ButtonModule  ,


  ]
 
})
export class PagesModule { }
