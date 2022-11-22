import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-ca-piso1',
  templateUrl: './mapa-ca-piso1.component.html',
  styleUrls: ['./mapa-ca-piso1.component.css']
})
export class MapaCaPiso1Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
