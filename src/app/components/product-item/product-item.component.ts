import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
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
