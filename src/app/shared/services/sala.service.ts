import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalaService {

    salaURL = environment.baseURL + "/sala";

    constructor(private http: HttpClient) { }

}
