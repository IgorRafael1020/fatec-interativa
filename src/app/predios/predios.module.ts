import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracaoComponent } from './components/administracao/administracao.component';
import { LabDeMateriaisESistemasBiomedicosComponent } from './components/lab-de-materiais-e-sistemas-biomedicos/lab-de-materiais-e-sistemas-biomedicos.component';
import { AreaDeServicoComponent } from './components/area-de-servico/area-de-servico.component';
import { CentralDeAulasComponent } from './components/central-de-aulas/central-de-aulas.component';
import { LabDeFisicaEEletroeletronicaComponent } from './components/lab-de-fisica-e-eletroeletronica/lab-de-fisica-e-eletroeletronica.component';
import { LabDeAutomacaoEMateriaisComponent } from './components/lab-de-automacao-e-materiais/lab-de-automacao-e-materiais.component';
import { LabDeFabricacaoMecanicaComponent } from './components/lab-de-fabricacao-mecanica/lab-de-fabricacao-mecanica.component';
import { LabDeProjetosMecanicosComponent } from './components/lab-de-projetos-mecanicos/lab-de-projetos-mecanicos.component';
import { LabDeIdiomasENucleoSocialComponent } from './components/lab-de-idiomas-e-nucleo-social/lab-de-idiomas-e-nucleo-social.component';
import { LabDePolimerosEProcessosMetalurgicosComponent } from './components/lab-de-polimeros-e-processos-metalurgicos/lab-de-polimeros-e-processos-metalurgicos.component';
import { LabDeTecnologiaDeInformacaoComponent } from './components/lab-de-tecnologia-de-informacao/lab-de-tecnologia-de-informacao.component';
import { MapaCaPiso1Component } from './components/central-de-aulas/components/mapa-ca-piso1/mapa-ca-piso1.component';
import { MapaCaPiso2Component } from './components/central-de-aulas/components/mapa-ca-piso2/mapa-ca-piso2.component';



@NgModule({
  declarations: [
    AdministracaoComponent,
    LabDeMateriaisESistemasBiomedicosComponent,
    AreaDeServicoComponent,
    CentralDeAulasComponent,
    LabDeFisicaEEletroeletronicaComponent,
    LabDeAutomacaoEMateriaisComponent,
    LabDeFabricacaoMecanicaComponent,
    LabDeProjetosMecanicosComponent,
    LabDeIdiomasENucleoSocialComponent,
    LabDePolimerosEProcessosMetalurgicosComponent,
    LabDeTecnologiaDeInformacaoComponent,
    MapaCaPiso1Component,
    MapaCaPiso2Component
  ],
  imports: [
    CommonModule
  ],
})
export class PrediosModule { }
