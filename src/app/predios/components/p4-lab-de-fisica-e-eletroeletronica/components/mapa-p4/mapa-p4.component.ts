import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p4',
  templateUrl: './mapa-p4.component.html',
  styleUrls: ['./mapa-p4.component.css']
})
export class MapaP4Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
