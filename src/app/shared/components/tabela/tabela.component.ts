import { Component, OnInit, Input } from '@angular/core';
import { Aula } from '../../models/aula.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  aulas: Aula[] = {} as Aula[];
  aulasSemana: Aula[] = {} as Aula[];

  showToggleSeg: boolean = false;
  showToggleTer: boolean = false;
  showToggleQua: boolean = false;
  showToggleQui: boolean = false;
  showToggleSex: boolean = false;
  showToggleSab: boolean = false;

  hoje: Date = new Date;

  constructor() { }

  ngOnInit(): void {
    this.alterarDia(this.hoje.getDay()+1);
  }

  receberAulas(aulasSemana: Aula[]){
    this.aulasSemana = aulasSemana;
    this.alterarDia(this.hoje.getDay()+1);
  }

  alterarDia(diaSemana: number) {
    this.showToggleSeg = false;
    this.showToggleTer = false;
    this.showToggleQua = false;
    this.showToggleQui = false;
    this.showToggleSex = false;
    this.showToggleSab = false;

    switch (diaSemana) {
      case 2:
        this.showToggleSeg = true;
        break;

      case 3:
        this.showToggleTer = true;
        break;
      
       case 4:
        this.showToggleQua = true;
        break;

      case 5:
        this.showToggleQui = true;
        break;

      case 6:
        this.showToggleSex = true;
        break;

      case 7:
        this.showToggleSab = true;
        break;
    
      default:
        this.showToggleSeg = true;
        break;
    }

    if(diaSemana == 1){
      diaSemana++;
    }
    this.aulas = this.aulasSemana.filter(aula => aula.dia == diaSemana.toString());
  }

}
