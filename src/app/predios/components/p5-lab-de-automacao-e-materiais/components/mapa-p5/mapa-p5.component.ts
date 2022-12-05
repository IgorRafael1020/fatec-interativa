import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p5',
  templateUrl: './mapa-p5.component.html',
  styleUrls: ['./mapa-p5.component.css']
})
export class MapaP5Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  sala61: boolean = false;
  sala62: boolean = false;
  sala63: boolean = false;
  sala64: boolean = false;
  sala65: boolean = false;
  sala66: boolean = false;
  sala67: boolean = false;
  sala68: boolean = false;
  sala69: boolean = false;
  sala70: boolean = false;
  sala71: boolean = false;
  sala72: boolean = false;
  sala73: boolean = false;
  sala74: boolean = false;
  sala75: boolean = false;
  sala76: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
    this.selecionarSala(idSala);
  }

  selecionarSala(idSala: number){
    this.sala61 = false;
    this.sala62 = false;
    this.sala63 = false;
    this.sala64 = false;
    this.sala65 = false;
    this.sala66 = false;
    this.sala67 = false;
    this.sala68 = false;
    this.sala69 = false;
    this.sala70 = false;
    this.sala71 = false;
    this.sala72 = false;
    this.sala73 = false;
    this.sala74 = false;
    this.sala75 = false;
    this.sala76 = false;

    switch (idSala) {
      case 61:
          this.sala61 = true;
        break;
      
      case 62:
          this.sala62 = true;
        break;
    
      case 63:
          this.sala63 = true;
        break;

      case 64:
          this.sala64 = true;
        break;

      case 65:
          this.sala65 = true;
        break;
      
      case 66:
          this.sala66 = true;
        break;
    
      case 67:
          this.sala67 = true;
        break;

      case 68:
          this.sala68 = true;
        break;

      case 69:
          this.sala69 = true;
        break;
      
      case 70:
          this.sala70 = true;
        break;
    
      case 71:
          this.sala71 = true;
        break;

      case 72:
          this.sala72 = true;
        break;
      
      case 73:
          this.sala73 = true;
        break;
      
      case 74:
          this.sala74 = true;
        break;
    
      case 75:
          this.sala75 = true;
        break;

      case 76:
          this.sala76 = true;
        break;
      
      default:
        break;
    }
  }
}
