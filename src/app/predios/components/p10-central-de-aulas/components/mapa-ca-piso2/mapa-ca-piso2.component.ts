import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mapa-ca-piso2',
  templateUrl: './mapa-ca-piso2.component.html',
  styleUrls: ['./mapa-ca-piso2.component.css']
})
export class MapaCaPiso2Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();
  
  sala13: boolean = false;
  sala14: boolean = false;
  sala15: boolean = false;
  sala16: boolean = false;
  sala17: boolean = false;
  sala18: boolean = false;
  sala19: boolean = false;
  sala20: boolean = false;
  sala21: boolean = false;
  sala22: boolean = false;
  sala23: boolean = false;
  sala24: boolean = false;
  sala25: boolean = false;
  sala26: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
    this.selecionarSala(idSala);
  }

  selecionarSala(idSala: number){
    this.sala13 = false;
    this.sala14 = false;
    this.sala15 = false;
    this.sala16 = false;
    this.sala17 = false;
    this.sala18 = false;
    this.sala19 = false;
    this.sala20 = false;
    this.sala21 = false;
    this.sala22 = false;
    this.sala23 = false;
    this.sala24 = false;
    this.sala25 = false;
    this.sala26 = false;

    switch (idSala) {
      case 13:
          this.sala13 = true;
        break;
      
      case 14:
          this.sala14 = true;
        break;
    
      case 15:
          this.sala15 = true;
        break;

      case 16:
          this.sala16 = true;
        break;

      case 17:
          this.sala17 = true;
        break;
      
      case 18:
          this.sala18 = true;
        break;
    
      case 19:
          this.sala19 = true;
        break;

      case 20:
          this.sala20 = true;
        break;

      case 21:
          this.sala21 = true;
        break;
      
      case 22:
          this.sala22 = true;
        break;
    
      case 23:
          this.sala23 = true;
        break;

      case 24:
          this.sala24 = true;
        break;

      case 25:
          this.sala25 = true;
        break;
      
      case 26:
          this.sala26 = true;
        break;
      
      default:
        break;
    }
  }
}
