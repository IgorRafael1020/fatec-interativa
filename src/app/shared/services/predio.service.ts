import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Predio } from '../models/predio.model';

@Injectable({
  providedIn: 'root',
})
export class PredioService {

    predioURL = environment.baseURL + "/predio";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Predio[]>{
      return this.http.get<Predio[]>(this.predioURL);
    }
    
    getById(idPredio: number): Observable<Predio>{
      return this.http.get<Predio>(this.predioURL + "/" + idPredio);
    }

    update(predio: Predio): Observable<Predio>{
      return this.http.post<Predio>(this.predioURL, predio);
    }
}
