import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {retry} from 'rxjs/operators';
import {Referentiel} from '../models/referentiel';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private http: HttpClient) { }

  getReferentiel(): Observable<Referentiel[]> {
    return this.http.get<Referentiel[]>(`${environment.url}/api/admin/referentiels`)
      .pipe(
        retry(1),
      );
  }
}
