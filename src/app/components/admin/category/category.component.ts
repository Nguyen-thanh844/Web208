import { Component } from '@angular/core';
import { CategoryService } from '../../../category.service';
import { ICategory } from '../../../interface/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category:ICategory[] =[]
  constructor(private categoryService:CategoryService,){}
 categoryForm = new FormGroup({
    name: new FormControl('',Validators.required),
  })
  
  async ngOnInit() {
      this.categoryService.Get_All_Category().subscribe(data=>{
        this.category = data
      })
  }
  onSubmit=async ()=> {
    const productdata = this.categoryForm.value as ICategory;
    this.categoryService.AddCategory(productdata).subscribe(data=>{
      alert('Thêm thành công')
      this.category.push(data)
      
    })
  }
  onDelete = (id:any)=>{
    if (confirm('Are you sure you want to delete this')) {
      this.categoryService.Delete_Category(id).subscribe(data=>{
        alert('Xóa thành công')
        this.category = this.category.filter(ct => ct.id!==id)
      })
    }
  }
}
