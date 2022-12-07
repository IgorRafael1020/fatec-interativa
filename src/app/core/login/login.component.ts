import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) { 
    this.formLogin = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    })
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
