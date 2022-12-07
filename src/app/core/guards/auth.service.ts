import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static habilitarNavbar = new EventEmitter<boolean>();

  constructor() { }
}
