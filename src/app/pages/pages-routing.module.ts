import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BranchesComponent } from './branches/branches.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HiringComponent } from './hiring/hiring.component';
import { NotesComponent } from './notes/notes.component';
import { OurMealsComponent } from './our-meals/our-meals.component';

const routes: Routes = [
  {
    path: "our-meals",
    component: OurMealsComponent,
    children:[]

  }, {
    path: "home",
    component: HomeComponent,


    children:[]

  }, {
    path: "products",
    component: ProductsComponent,
    children:[]

  },
  {
    path: "gallary",
    component: GallaryComponent,
    children:[]

  }, {
    path: "hiring",
    component: HiringComponent
  ,
  children:[]

  }, {
    path: "notes",
    component: NotesComponent
    ,children:[]
    ,
  }, {
    path: "our-meals",
    component: OurMealsComponent,
    children:[]

  }, {
    path: "branches",
    component: BranchesComponent,
    children:[]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
