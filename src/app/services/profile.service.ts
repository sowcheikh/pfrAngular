import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Profile} from '../models/profile';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getAllProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.url}/api/admin/profils`)
      .pipe(
        retry(1),
      );
  }
  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get<Profile>(`${environment.url}/${id}`);
  }

  // tslint:disable-next-line:typedef
  create(params) {
    return this.http.post(`${environment.url}/api/admin/profils`, params);
  }

  // tslint:disable-next-line:typedef
  update(id: string, params) {
    return this.http.put(`${environment.url}/${id}`, params);
  }

  // tslint:disable-next-line:typedef
  delete(id: string) {
    return this.http.delete(`${environment.url}/${id}`);
  }
}
