import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute
  ){}
  
  product!: IProduct | undefined;
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productService.GET_Product_ById(param['id']).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    });
  }
}
