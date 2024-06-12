import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/products'
  Get_All_Products = ():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  AddProduct = (data:IProduct):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  GET_Product_ById = (id:string):Observable<any>=>{
    return this.http.get(this.API_URL+`/${id}`)
  }
  Update_Product = (id:string,data:IProduct):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }
  Delete_Product = (id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
  GET_Category_ByCT = (category:number):Observable<any>=>{
    return this.http.get(this.API_URL+`/${category}`)
  }
  GET_seaarch_ById = (id:string):Observable<any>=>{
    return this.http.get(this.API_URL+'?'+name)
  }
}
