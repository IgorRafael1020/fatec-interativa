import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './home/components/mapa/mapa.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './core/login/login.component';
import { Error404Component } from './core/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { PrediosModule } from './predios/predios.module';
import { TabelaComponent } from './shared/components/tabela/tabela.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CadastroComponent } from './core/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiaSemanaPipe } from './shared/pipes/dia-semana.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    NavbarComponent,
    LoginComponent,
    Error404Component,
    CadastroComponent,
    DiaSemanaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrediosModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
