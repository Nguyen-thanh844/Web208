import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:IProduct[] =[]
  constructor(
    private productService:ProductService,
    
  ){}
  async ngOnInit() {
    this.productService.Get_All_Products().subscribe(data=>{
      this.products = data
    })
}
}
