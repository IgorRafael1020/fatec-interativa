import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PredioService {

    predioURL = environment.baseURL + "/predio";

    constructor(private http: HttpClient) { }

}
