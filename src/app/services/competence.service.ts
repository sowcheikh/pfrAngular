import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupeCompetence} from '../models/groupeComp';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';
import {Competence} from '../models/competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }

  getCompetence(): Observable<Competence[]> {
    return this.http.get<Competence[]>(`${environment.url}/api/admin/competences`)
      .pipe(
        retry(1),
      );
  }

  getCompetenceByID(id: number): Observable<Competence[]> {
    return this.http.get<Competence[]>(`${environment.url}/api/admin/competences/${id}`)
      .pipe(
        retry(1),
      );
  }
}
