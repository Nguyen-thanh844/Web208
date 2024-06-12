import { Component } from '@angular/core';
import { ICategory } from '../../interface/category';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  id:any;
  products:IProduct[] =[]
  constructor(
    private productService:ProductService,
    private route :ActivatedRoute
  ){}
  
    ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productService.GET_Product_ById(param['category']).subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    });
      
  }
}
