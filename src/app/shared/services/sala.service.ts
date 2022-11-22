import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sala } from '../models/sala.model';

@Injectable({
  providedIn: 'root',
})
export class SalaService {

    salaURL = environment.baseURL + "/sala";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Sala[]>{
      return this.http.get<Sala[]>(this.salaURL);
    }
    
    getById(idSala: number): Observable<Sala>{
      return this.http.get<Sala>(this.salaURL + "/" + idSala);
    }

    update(predio: Sala): Observable<Sala>{
      return this.http.post<Sala>(this.salaURL, predio);
    }
}
