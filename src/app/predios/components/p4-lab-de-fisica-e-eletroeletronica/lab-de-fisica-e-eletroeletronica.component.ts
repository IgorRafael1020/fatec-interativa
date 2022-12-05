import { Component, OnInit, ViewChild } from '@angular/core';
import { TabelaComponent } from 'src/app/shared/components/tabela/tabela.component';
import { Aula } from 'src/app/shared/models/aula.model';
import { Predio } from 'src/app/shared/models/predio.model';
import { Sala } from 'src/app/shared/models/sala.model';
import { AulaService } from 'src/app/shared/services/aula.service';
import { PredioService } from 'src/app/shared/services/predio.service';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-lab-de-fisica-e-eletroeletronica',
  templateUrl: './lab-de-fisica-e-eletroeletronica.component.html',
  styleUrls: ['./lab-de-fisica-e-eletroeletronica.component.css']
})
export class LabDeFisicaEEletroeletronicaComponent implements OnInit {

  @ViewChild(TabelaComponent, {static: false}) tabela!: TabelaComponent;
  predio: Predio = {} as Predio;
  sala: Sala = {} as Sala;
  aulas: Aula[] = {} as Aula[];

  hoje: Date = new Date;

  constructor(
    private predioService: PredioService,
    private salaService: SalaService,
    private aulaService: AulaService
  ) {
    this.pesquisarPredio();
  }

  ngOnInit(): void {
  }

  pesquisarPredio() {
    this.predioService.getById(4).subscribe((predio) => (this.predio = predio));
  }

  pesquisarHorariosSala(idSala: number) {
    this.salaService.getById(idSala).subscribe((sala) => (this.sala = sala));
    this.aulaService.getBySala(idSala).subscribe(
      (aulas) => {
        (this.aulas = aulas);
        this.tabela.receberAulas(this.aulas);
      }
    );
  }
}
