import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p11',
  templateUrl: './mapa-p11.component.html',
  styleUrls: ['./mapa-p11.component.css']
})
export class MapaP11Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  sala30: boolean = false;
  sala31: boolean = false;
  sala32: boolean = false;
  sala33: boolean = false;
  sala34: boolean = false;
  sala35: boolean = false;
  sala36: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
    this.selecionarSala(idSala);
  }

  selecionarSala(idSala: number){
    this.sala30 = false;
    this.sala31 = false;
    this.sala32 = false;
    this.sala33 = false;
    this.sala34 = false;
    this.sala35 = false;
    this.sala36 = false;

    switch (idSala) {
      case 30:
          this.sala30 = true;
        break;
      
      case 31:
          this.sala31 = true;
        break;
    
      case 32:
          this.sala32 = true;
        break;

      case 33:
          this.sala33 = true;
        break;

      case 34:
          this.sala34 = true;
        break;
      
      case 35:
          this.sala35 = true;
        break;
    
      case 36:
          this.sala36 = true;
        break;
      
      default:
        break;
    }
  }
}
