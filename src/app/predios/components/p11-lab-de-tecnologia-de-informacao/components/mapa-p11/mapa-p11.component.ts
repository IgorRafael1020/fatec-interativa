import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p11',
  templateUrl: './mapa-p11.component.html',
  styleUrls: ['./mapa-p11.component.css']
})
export class MapaP11Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
