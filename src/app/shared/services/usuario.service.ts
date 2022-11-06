
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

    usuarioURL = environment.baseURL + "/usuario";

    constructor(private http: HttpClient) { }

}
