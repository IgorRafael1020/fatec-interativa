import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa-p5',
  templateUrl: './mapa-p5.component.html',
  styleUrls: ['./mapa-p5.component.css']
})
export class MapaP5Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
