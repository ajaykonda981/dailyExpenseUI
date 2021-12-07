import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyExpensesService {

  url = environment.apiurl + 'api/Dailyexpenses';
  constructor(
    private http: HttpClient
  ) { }

  search() {
    return this.http.get(this.url)
  }

  post(data: any) {
    return this.http.post(this.url,data)
  }

  delete(id:number, reason) {
    const paramsT = new HttpParams()
    .append('reason', reason)
    return this.http.delete(this.url+'/'+id, { params: paramsT })
  }

  getByid(id:number) {
    return this.http.get(this.url+ '/'+id)
  }

  update(data) {
    return this.http.put(this.url+'/'+data.Id,data)
  }

  getAll(){
    return this.http.get(this.url)
  }

  getExpenses() {
    return this.http.get(this.url + '/expensecalculator')
  }
}
