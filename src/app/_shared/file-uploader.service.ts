import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(
    private http: HttpClient,
  ) { }

  uploadMultipleFiles(formData = new FormData()) {
    return this.http.post( 'api/EmailNotifications/UploadFiles', formData, {reportProgress: true, observe: 'events'})
  }
}
