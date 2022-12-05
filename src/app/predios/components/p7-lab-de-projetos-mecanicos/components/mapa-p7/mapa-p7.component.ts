import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p7',
  templateUrl: './mapa-p7.component.html',
  styleUrls: ['./mapa-p7.component.css']
})
export class MapaP7Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
