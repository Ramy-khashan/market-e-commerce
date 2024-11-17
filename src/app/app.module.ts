import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
