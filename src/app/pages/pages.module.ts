import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HiringComponent } from './hiring/hiring.component';
import { ProductsComponent } from './products/products.component';
import { NotesComponent } from './notes/notes.component';
import { BranchesComponent } from './branches/branches.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SharedModule } from "../shared/shared.module";
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HomeComponent,
    HiringComponent,
    ProductsComponent,
    NotesComponent,
    BranchesComponent,
    GallaryComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,

  ]
})
export class PagesModule { }
