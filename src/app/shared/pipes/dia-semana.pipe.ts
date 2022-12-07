import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diaSemana'
})
export class DiaSemanaPipe implements PipeTransform {

  transform(dia: string): string {
    switch (dia) {
      case '2': return "SEGUNDA-FEIRA";
      case '3': return "TERÇA-FEIRA";
      case '4': return "QUARTA-FEIRA";
      case '5': return "QUINTA-FEIRA";
      case '6': return "SEXTA-FEIRA";
      case '7': return "SÁBADO";
      default: return "";
    }
  }
}
