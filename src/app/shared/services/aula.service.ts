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

    getBySala(idSala: number): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.aulaURL + "/sala/" + idSala);
    }

    getByProfessor(): Observable<Aula[]>{
        return this.http.get<Aula[]>(this.aulaURL + "/professor");
    }

    // update(aula: Aula): Observable<Aula>{
    //     return this.http.put<Aula>(this.aulaURL, aula);
    // }

    salvar(aula: Aula): Observable<Aula> {
        //cadastrar
        if (aula.idAula == null) {
            return this.http.post<Aula>(this.aulaURL, aula);
        }
        //editar
        else {
            return this.http.put<Aula>(this.aulaURL, aula);
        }
    }
}
