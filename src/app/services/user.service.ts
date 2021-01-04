import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.url}/api/admin/users`)
      .pipe(
        retry(1),
      );
  }
  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get<User>(`${environment.url}/api/admin/users/${id}`);
  }

  // tslint:disable-next-line:typedef
  create(params: FormData): Observable<User[]> {
    return this.http.post<User[]>(`${environment.url}/api/admin/users`, params);
  }

  // tslint:disable-next-line:typedef
  update(id: string, params) {
    return this.http.put(`${environment.url}/api/admin/users/${id}`, params);
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    return this.http.delete(`${environment.url}/api/admin/users/${id}`);
  }
}
