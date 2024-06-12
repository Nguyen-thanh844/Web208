import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './interface/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/category'
  Get_All_Category = ():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  GET_Category_ById = (id:string):Observable<any>=>{
    return this.http.get(this.API_URL+`/${id}`)
  }
  AddCategory = (data:ICategory):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  Update_Category = (id:string,data:ICategory):Observable<any>=>{
    return this.http.put(this.API_URL+'/'+id,data)
  }
  Delete_Category = (id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+'/'+id)
  }
  
}
