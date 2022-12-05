import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mapa-ca-piso2',
  templateUrl: './mapa-ca-piso2.component.html',
  styleUrls: ['./mapa-ca-piso2.component.css']
})
export class MapaCaPiso2Component implements OnInit {

  @Output() idSala = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(idSala: number) {
    this.idSala.emit(idSala);
  }
}
