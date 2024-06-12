import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../../interface/category';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
  products:IProduct[] =[]
  constructor(
    private productService:ProductService,
    private router :ActivatedRoute,
    private categoryService:CategoryService
  ){}
  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    price: new FormControl(1000,Validators.min(2000)),
    cat_id: new FormControl(1)
  })
  route = new Router();
  category:ICategory[] =[]
  productid = this.router.snapshot.params['id']
  async ngOnInit() {
      this.productService.GET_Product_ById(this.productid).subscribe(data=>{
        this.productForm.controls.name.setValue(data.name)
        this.productForm.controls.image.setValue(data.image)
        this.productForm.controls.price.setValue(data.price)
        this.productForm.controls.cat_id.setValue(data.cat_id)
      })
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
    if(this.productForm.valid){
      this.productService.Update_Product(this.productid,this.productForm.value as IProduct).subscribe(data=>{
        alert('update thành công')
        this.route.navigate(['admin/productadmin'])
      })
      
    }
  }
}
