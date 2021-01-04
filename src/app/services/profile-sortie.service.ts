import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from '../models/profile';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';
import {ProfileSorite} from '../models/profile_sortie';

@Injectable({
  providedIn: 'root'
})
export class ProfileSortieService {

  constructor(private http: HttpClient) { }

  getAllProfileSortie(): Observable<Profile[]> {
    return this.http.get<ProfileSorite[]>(`${environment.url}/api/admin/profilsorties`)
      .pipe(
        retry(1),
      );
  }
  // tslint:disable-next-line:typedef
  getById(id: string) {
    return this.http.get<ProfileSorite>(`${environment.url}/api/admin/profile_sorties/${id}`);
  }

  // tslint:disable-next-line:typedef
  create(params) {
    return this.http.post(`${environment.url}/api/admin/profilsorties`, params);
  }

  // tslint:disable-next-line:typedef
  update(id: string, params) {
    return this.http.put(`${environment.url}/api/admin/profile_sorties/${id}`, params);
  }

  // tslint:disable-next-line:typedef
  delete(id: string) {
    return this.http.delete(`${environment.url}/api/admin/profile_sorties/${id}`);
  }
}
