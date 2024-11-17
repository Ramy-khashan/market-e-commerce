import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BranchesComponent } from './branches/branches.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HiringComponent } from './hiring/hiring.component';
import { NotesComponent } from './notes/notes.component';
import { OurMealsComponent } from './our-meals/our-meals.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    data: {
      title: 'Page',
    },
    path: "home",
    component: HomeComponent,
    children: []

  }, {
    data: {
      title: 'Page',
    },
    path: "product-details",
    component: ProductDetailsComponent,
    children: []

  }, {
    data: {
      title: 'Page',
    },
    path: "products",
    component: ProductsComponent,
    children: []

  },
  {
    data: {
      title: 'Page',
    },
    path: "gallary",
    component: GallaryComponent,
    children: []

  }, {
    data: {
      title: 'Page',
    },
    path: "hiring",
    component: HiringComponent
    ,
    children: []

  }, {
    data: {
      title: 'Page',
    },
    path: "notes",
    component: NotesComponent
    , children: []
    ,
  }, {
    data: {
      title: 'Page',
    },
    path: "our-meals",
    component: OurMealsComponent,
    children: []

  }, {
    data: {
      title: 'Page',
    },
    path: "branches",
    component: BranchesComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
