import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private  httpClient: HttpClient) { }
 // postFile(fileToUpload: File): Observable<boolean> {
  //  const endpoint = 'http://localhost:8000/api/admin/users';
   // const formData: FormData = new FormData();
   // formData.append('fileKey', fileToUpload, fileToUpload.name);
  //  return this.httpClient
   //   .post(endpoint, formData, { headers: yourHeadersConfig })
    //  .map(() => true)
    //  .catch((e) => this.handleError(e));
 // }
}
