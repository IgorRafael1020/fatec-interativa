import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p4',
  templateUrl: './mapa-p4.component.html',
  styleUrls: ['./mapa-p4.component.css']
})
export class MapaP4Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  sala41: boolean = false;
  sala42: boolean = false;
  sala43: boolean = false;
  sala44: boolean = false;
  sala45: boolean = false;
  sala46: boolean = false;
  sala47: boolean = false;
  sala48: boolean = false;
  sala49: boolean = false;
  sala50: boolean = false;
  sala51: boolean = false;
  sala52: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
    this.selecionarSala(idSala);
  }

  selecionarSala(idSala: number){
    this.sala41 = false;
    this.sala42 = false;
    this.sala43 = false;
    this.sala44 = false;
    this.sala45 = false;
    this.sala46 = false;
    this.sala47 = false;
    this.sala48 = false;
    this.sala49 = false;
    this.sala50 = false;
    this.sala51 = false;
    this.sala52 = false;

    switch (idSala) {
      case 41:
          this.sala41 = true;
        break;
      
      case 42:
          this.sala42 = true;
        break;
    
      case 43:
          this.sala43 = true;
        break;

      case 44:
          this.sala44 = true;
        break;

      case 45:
          this.sala45 = true;
        break;
      
      case 46:
          this.sala46 = true;
        break;
    
      case 47:
          this.sala47 = true;
        break;

      case 48:
          this.sala48 = true;
        break;

      case 49:
          this.sala49 = true;
        break;
      
      case 50:
          this.sala50 = true;
        break;
    
      case 51:
          this.sala51 = true;
        break;

      case 52:
          this.sala52 = true;
        break;
      
      default:
        break;
    }
  }
}
