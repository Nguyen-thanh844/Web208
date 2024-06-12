import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './dashboard/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { adminGuard } from './Guards/admin.guard';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditproductComponent } from './components/admin/editproduct/editproduct.component';
import { ProductadminComponent } from './components/admin/productadmin/productadmin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'',component:ClientComponent,children:[
    {path:'',component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'category/:id',component:ProductListComponent},
    {path:'cart',component:CartComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'search',component:SearchComponent},
    {path:'products/:id',component:ProductDetailComponent}
  ]},
  {path:'admin',component:AdminComponent,canActivate:[adminGuard], children:[
    {path:'productadmin',component:ProductadminComponent},
    {path:'adminadd',component:AddproductComponent},
    {path:'editproduct/:id',component:EditproductComponent},
    {path:'category',component:CategoryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
