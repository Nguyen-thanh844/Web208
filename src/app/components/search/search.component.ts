import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { IProduct } from '../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  products:IProduct[] =[]
  constructor(private route:ActivatedRoute,private productService:ProductService,){}
   async ngOnInit(){
    const keywords = this.route.snapshot.queryParams['keywords']
    console.log(keywords);
    const {data} = await axios.get('http://localhost:3000/products?name_like='+keywords)
      console.log(data); 
      this.products = data
  }
  
}
