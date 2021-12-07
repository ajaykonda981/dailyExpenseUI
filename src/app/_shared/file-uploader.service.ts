import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  url = environment.apiurl + 'api/FileUoploiader';
  downloadUrl = environment.apiurl + 'api/FileDownload';
  constructor(
    private http: HttpClient,
  ) { }

  uploadMultipleFiles(formData = new FormData()): any {
    return this.http.post(this.url, formData)
  }

  // dowload(attach) {
  //   return this.http.post(this.url +'/download?FileName='+ attach, {
  //     reportProgress: true,
  //     responseType: 'blob',
  //   });
  // }

  download(data: any) {
    return this.http.post(this.downloadUrl,data, {responseType: 'blob'})
  }
}
