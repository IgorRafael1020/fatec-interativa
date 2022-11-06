import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aula } from '../models/aula.model';

@Injectable({
  providedIn: 'root',
})
export class AulaService {

    aulaURL = environment.baseURL + "/aula";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.aulaURL);
    }

    getBySala(): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.aulaURL + "/sala");
    }

    getByProfessor(): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.aulaURL + "/professor");
    }

    update(aula: Aula): Observable<Aula>{
        return this.http.put<Aula>(this.aulaURL, aula);
    }
}
