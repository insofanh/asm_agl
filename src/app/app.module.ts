import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';

// decorators typescript
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    BaseLayoutComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    AdminProductComponent,
    DashboardComponent,
    AdminProductComponent,
    AdminLayoutComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }