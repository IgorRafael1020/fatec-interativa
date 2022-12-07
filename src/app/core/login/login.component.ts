import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@Output() desabilitarNav = new EventEmitter<boolean>();

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.formLogin = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    })
    AuthService.habilitarNavbar.emit(false);
  }

  ngOnInit(): void {
  }

  logar() {
    console.log(this.formLogin.getRawValue());
    if(this.formLogin.get('usuario')?.value == "admin" && this.formLogin.get('senha')?.value == "admin"){
      this.router.navigate(['/cadastro']);
    }
  }
}
