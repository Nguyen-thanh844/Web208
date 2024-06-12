import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrl: './productadmin.component.css'
})
export class ProductadminComponent {
  products:IProduct[] =[]
  constructor(
    private productService:ProductService
  ){}
  async ngOnInit() {
    this.productService.Get_All_Products().subscribe(data=>{
      this.products = data
    })
}
onDelete = (id:any)=>{
  if (confirm('Are you sure you want to delete this')) {
    this.productService.Delete_Product(id).subscribe(data=>{
      alert('Xóa thành công')
      this.products = this.products.filter(product => product.id!==id)
    })
  }
}
}
