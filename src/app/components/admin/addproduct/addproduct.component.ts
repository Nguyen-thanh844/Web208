import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { ProductService } from '../../../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../category.service';
import { Router } from '@angular/router';
import { ICategory } from '../../../interface/category';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  products:IProduct[] =[]
  constructor(
    private productService:ProductService,
    private categoryService:CategoryService
  ){}
  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    price: new FormControl(1000,Validators.min(2000)),
    category: new FormControl(1)
  })
  category:ICategory[] =[]
  router = new Router()
  async ngOnInit() {
      this.categoryService.Get_All_Category().subscribe(data=>{
        this.category = data
        console.log(data);
      },
      err=>{
        console.log(err);          
      }
    )
  }
  onSubmit=async ()=> {
    const productdata = this.productForm.value as IProduct;
    this.productService.AddProduct(productdata).subscribe(data=>{
      alert('Thêm thành công')
      this.products.push(data)
      this.router.navigate(['admin/productadmin'])
    })
  }
}
