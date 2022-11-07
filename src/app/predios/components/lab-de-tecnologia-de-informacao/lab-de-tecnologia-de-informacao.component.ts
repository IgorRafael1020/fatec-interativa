import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/shared/models/aula.model';
import { Predio } from 'src/app/shared/models/predio.model';
import { Sala } from 'src/app/shared/models/sala.model';

@Component({
  selector: 'app-lab-de-tecnologia-de-informacao',
  templateUrl: './lab-de-tecnologia-de-informacao.component.html',
  styleUrls: ['./lab-de-tecnologia-de-informacao.component.css']
})
export class LabDeTecnologiaDeInformacaoComponent implements OnInit {

  predio: Predio = {} as Predio;
  sala: Sala = {} as Sala;
  aula: Aula[] = {} as Aula[];

  showTogglePiso1: boolean = true;
  showTogglePiso2: boolean = false;

  constructor() {
    this.predio.idPredio = 10;
    this.predio.predio = "Central de Aulas"
    this.predio.descricao = "Prédio pricipal da Fatec Sorocaba";

    this.sala.idSala = 11;
    this.sala.sala = "Sala 11"
    this.sala.descricao = "Sala de Aula"
    this.sala.idPredio = 10;
  }

  ngOnInit(): void {
  }

}
