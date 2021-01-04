import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';
import {GroupeCompetence} from '../models/groupeComp';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompService {

  constructor(private http: HttpClient) { }

  getGroupeComp(): Observable<GroupeCompetence[]> {
    return this.http.get<GroupeCompetence[]>(`${environment.url}/api/admin/grpecompetences`)
      .pipe(
        retry(1),
      );
  }

  getCompInGroupeComp(id: number): Observable<GroupeCompetence[]> {
    return this.http.get<GroupeCompetence[]>(`${environment.url}/api/admin/grpecompetences/${id}/competences`)
      .pipe(
        retry(1),
      );
  }
}
