import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-ca-piso1',
  templateUrl: './mapa-ca-piso1.component.html',
  styleUrls: ['./mapa-ca-piso1.component.css']
})
export class MapaCaPiso1Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  sala1: boolean = false;
  sala2: boolean = false;
  sala3: boolean = false;
  sala4: boolean = false;
  sala5: boolean = false;
  sala6: boolean = false;
  sala7: boolean = false;
  sala8: boolean = false;
  sala9: boolean = false;
  sala10: boolean = false;
  sala11: boolean = false;
  sala12: boolean = false;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
    this.selecionarSala(idSala);
  }

  selecionarSala(idSala: number){
    this.sala1 = false;
    this.sala2 = false;
    this.sala3 = false;
    this.sala4 = false;
    this.sala5 = false;
    this.sala6 = false;
    this.sala7 = false;
    this.sala8 = false;
    this.sala9 = false;
    this.sala10 = false;
    this.sala11 = false;
    this.sala12 = false;

    switch (idSala) {
      case 1:
          this.sala1 = true;
        break;
      
      case 2:
          this.sala2 = true;
        break;
    
      case 3:
          this.sala3 = true;
        break;

      case 4:
          this.sala4 = true;
        break;

      case 5:
          this.sala5 = true;
        break;
      
      case 6:
          this.sala6 = true;
        break;
    
      case 7:
          this.sala7 = true;
        break;

      case 8:
          this.sala8 = true;
        break;

      case 9:
          this.sala9 = true;
        break;
      
      case 10:
          this.sala10 = true;
        break;
    
      case 11:
          this.sala11 = true;
        break;

      case 12:
          this.sala12 = true;
        break;
      
      default:
        break;
    }
  }
}
