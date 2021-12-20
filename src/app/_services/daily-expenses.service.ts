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

  search(filters: any = []) {
    if(filters.length > 0) {
      let queryFilters: any = filters[0]
      const paramsT = new HttpParams()
      .append('category', queryFilters.category)
      .append('fromExpensesDate', queryFilters.fromExpensesDate)
      .append('toExpensesDate', queryFilters.toExpensesDate)
      .append('paymentMode', queryFilters.paymentMode)
      return this.http.get(this.url, { params: paramsT })

    } else {
      return this.http.get(this.url)

    }
  }

  post(data: any) {
    return this.http.post(this.url,data)
  }

  delete(data) {
    
    return this.http.post(this.url+'/Delete', data)
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
