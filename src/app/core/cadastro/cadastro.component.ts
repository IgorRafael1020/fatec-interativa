import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aula } from 'src/app/shared/models/aula.model';
import { Predio } from 'src/app/shared/models/predio.model';
import { Sala } from 'src/app/shared/models/sala.model';
import { AulaService } from 'src/app/shared/services/aula.service';
import { PredioService } from 'src/app/shared/services/predio.service';
import { SalaService } from 'src/app/shared/services/sala.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  predios: Predio[] = {} as Predio[];
  salas: Sala[] = {} as Sala[];
  aulas: Aula[] = {} as Aula[];

  predioSelecionado: Predio = {} as Predio;
  salaSelecionado: Sala = {} as Sala;
  aulaSelecionado: Aula = {} as Aula;

  formAula: FormGroup;

  editarDesabilitado: boolean = false;
  salvarDesabilitado: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    public predioService: PredioService,
    public salaService: SalaService,
    public aulaService: AulaService,
  ) {
    this.formAula = this.formBuilder.group({
      idAula: [{value:'', disabled:true}],
      aula: [{value:'', disabled:true}, Validators.required],
      dia: [{value:'', disabled:true}, Validators.required],
      horario: [{value:'', disabled:true}, Validators.required],
      professor: [{value:'', disabled:true}, Validators.required],
      idSala: [{value:'', disabled:true}, Validators.required],
    })
    this.listarPredios();
  }

  ngOnInit(): void {
  }

  listarPredios() {
    this.predioService.getAll().subscribe((predios) => (this.predios = predios));
  }

  pesquisarSalas() {
    this.salaService.getByPredio(this.predioSelecionado.idPredio).subscribe((salas) => (this.salas = salas))
  }

  pesquisarAulas() {
    this.aulaService.getBySala(this.salaSelecionado.idSala).subscribe((aulas) => (this.aulas = aulas))
  }

  onClick(aula: Aula) {
    this.formAula.setValue({
      idAula: aula.idAula,
      aula: aula.aula,
      dia: aula.dia,
      horario: aula.horario,
      professor: aula.professor,
      idSala: aula.idSala,
    });

    this.salvarDesabilitado = true;
    this.editarDesabilitado = false;

    this.formAula.disable();
  }

  novo() {
    this.aulaSelecionado = {} as Aula;
    this.formAula.enable();
    this.formAula.get('id')?.disable();
    this.formAula.get('idSala')?.setValue(this.salaSelecionado.idSala);

    this.editarDesabilitado = true;
    this.salvarDesabilitado = false;
  }

  salvar() {
    console.log(this.formAula.getRawValue());
    if(this.formAula.valid){
      this.aulaService.salvar(this.formAula.getRawValue()).subscribe(
        res => {
          if(res){
            alert("Salvo com sucesso");
            this.cancelar();
            this.pesquisarAulas();
            //tem uma mensagem de sucesso aqui
          }
          else{
            alert("Erro");
          }
        },
        error => {alert(error)} 
        )
    } 
    else{
      alert("Prencha os Campos")
      //mensagem para preencher os campos
    }
  }

  editar() {
    this.formAula.enable();
    this.formAula.get('id')?.disable();

    //this.novoDesabilitado = true;
    this.editarDesabilitado = true;
    this.salvarDesabilitado = false;

  }

  cancelar(): void{
    this.formAula.reset();
    this.formAula.disable();

    this.editarDesabilitado = false;
    this.salvarDesabilitado = true;
  }
}
