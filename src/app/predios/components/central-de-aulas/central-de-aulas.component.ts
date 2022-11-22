import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/shared/models/aula.model';
import { Predio } from 'src/app/shared/models/predio.model';
import { Sala } from 'src/app/shared/models/sala.model';
import { AulaService } from 'src/app/shared/services/aula.service';
import { PredioService } from 'src/app/shared/services/predio.service';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-central-de-aulas',
  templateUrl: './central-de-aulas.component.html',
  styleUrls: ['./central-de-aulas.component.css']
})
export class CentralDeAulasComponent implements OnInit {

  predio: Predio = {} as Predio;
  sala: Sala = {} as Sala;
  aulas: Aula[] = {} as Aula[];

  showTogglePiso1: boolean = true;
  showTogglePiso2: boolean = false;

  constructor(
    private predioService: PredioService,
    private salaService: SalaService,
    private aulaService: AulaService
  ) {
    this.pesquisarPredio();
  }

  ngOnInit(): void {
  }

  alterarPiso(piso: number){
    if(piso == 1){
      this.showTogglePiso1 = true;
      this.showTogglePiso2 = false;
    }
    else{
      this.showTogglePiso1 = false;
      this.showTogglePiso2 = true;
    }
  }

  pesquisarPredio() {
    this.predioService.getById(10).subscribe((predio) => (this.predio = predio));
  }

  pesquisarHorariosSala(idSala: number) {
    this.salaService.getById(idSala).subscribe((sala) => (this.sala = sala));
    this.aulaService.getBySala(idSala).subscribe((aulas) => (this.aulas = aulas));
  }
}
