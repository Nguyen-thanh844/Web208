import { Component } from '@angular/core';
import { ICategory } from '../../interface/category';
import { IProduct } from '../../interface/product';
import { CategoryService } from '../../category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList: ICategory[]=[];
    id:number = 0;
    name:string="";
  constructor(
    private categoryService:CategoryService
  ){}
  
  async ngOnInit() {
    this.categoryService.Get_All_Category().subscribe(data=>{
      this.productList = data
      console.log(data);
    },
    err=>{
      console.log(err);          
    }
  )
    
  }
}
