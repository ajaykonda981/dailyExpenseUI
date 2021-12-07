import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiurl + 'api/Categories';
  constructor(
    private http: HttpClient
  ) { }

 

  search() {
    return this.http.get(this.url)
  }

  post(data: any) {
    return this.http.post(this.url,data)
  }

  delete(id:number) {
    return this.http.delete(this.url+id)
  }

  getByid(id:number) {
    return this.http.get(this.url+id)
  }

  update(data) {
    return this.http.put(this.url+data.id,data)
  }

  getAll(){
    return this.http.get(this.url)
  }

}
