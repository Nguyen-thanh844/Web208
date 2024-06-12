import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientComponent } from './dashboard/client/client.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ContenadminComponent } from './components/contenadmin/contenadmin.component';
import { EditproductComponent } from './components/admin/editproduct/editproduct.component';
import { ProductadminComponent } from './components/admin/productadmin/productadmin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    ClientComponent,
    AdminComponent,
    ProductItemComponent,
    AddproductComponent,
    CategoryComponent,
    RegisterComponent,
    LoginComponent,
    ContenadminComponent,
    EditproductComponent,
    ProductadminComponent,
    ProductListComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
