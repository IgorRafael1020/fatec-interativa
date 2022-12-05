import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaComponent } from '../shared/components/tabela/tabela.component';
import { AdministracaoComponent } from './components/p1-administracao/administracao.component';
import { LabDeMateriaisESistemasBiomedicosComponent } from './components/p2-lab-de-materiais-e-sistemas-biomedicos/lab-de-materiais-e-sistemas-biomedicos.component';
import { CentralDeAulasComponent } from './components/p10-central-de-aulas/central-de-aulas.component';
import { LabDeFisicaEEletroeletronicaComponent } from './components/p4-lab-de-fisica-e-eletroeletronica/lab-de-fisica-e-eletroeletronica.component';
import { LabDeAutomacaoEMateriaisComponent } from './components/p5-lab-de-automacao-e-materiais/lab-de-automacao-e-materiais.component';
import { LabDeFabricacaoMecanicaComponent } from './components/p6-lab-de-fabricacao-mecanica/lab-de-fabricacao-mecanica.component';
import { LabDeProjetosMecanicosComponent } from './components/p7-lab-de-projetos-mecanicos/lab-de-projetos-mecanicos.component';
import { LabDePolimerosEProcessosMetalurgicosComponent } from './components/p9-lab-de-polimeros-e-processos-metalurgicos/lab-de-polimeros-e-processos-metalurgicos.component';
import { LabDeTecnologiaDeInformacaoComponent } from './components/p11-lab-de-tecnologia-de-informacao/lab-de-tecnologia-de-informacao.component';
import { MapaP1Component } from './components/p1-administracao/components/mapa-p1/mapa-p1.component';
import { MapaP2Component } from './components/p2-lab-de-materiais-e-sistemas-biomedicos/components/mapa-p2/mapa-p2.component';
import { MapaP4Component } from './components/p4-lab-de-fisica-e-eletroeletronica/components/mapa-p4/mapa-p4.component';
import { MapaP5Component } from './components/p5-lab-de-automacao-e-materiais/components/mapa-p5/mapa-p5.component';
import { MapaP6Component } from './components/p6-lab-de-fabricacao-mecanica/components/mapa-p6/mapa-p6.component';
import { MapaP7Component } from './components/p7-lab-de-projetos-mecanicos/components/mapa-p7/mapa-p7.component';
import { MapaP9Component } from './components/p9-lab-de-polimeros-e-processos-metalurgicos/components/mapa-p9/mapa-p9.component';
import { MapaCaPiso1Component } from './components/p10-central-de-aulas/components/mapa-ca-piso1/mapa-ca-piso1.component';
import { MapaCaPiso2Component } from './components/p10-central-de-aulas/components/mapa-ca-piso2/mapa-ca-piso2.component';
import { MapaP11Component } from './components/p11-lab-de-tecnologia-de-informacao/components/mapa-p11/mapa-p11.component';




@NgModule({
  declarations: [
    AdministracaoComponent,
    LabDeMateriaisESistemasBiomedicosComponent,
    CentralDeAulasComponent,
    LabDeFisicaEEletroeletronicaComponent,
    LabDeAutomacaoEMateriaisComponent,
    LabDeFabricacaoMecanicaComponent,
    LabDeProjetosMecanicosComponent,
    LabDePolimerosEProcessosMetalurgicosComponent,
    LabDeTecnologiaDeInformacaoComponent,
    MapaP1Component,
    MapaP2Component,
    MapaP4Component,
    MapaP5Component,
    MapaP6Component,
    MapaP7Component,
    MapaP9Component,
    MapaCaPiso1Component,
    MapaCaPiso2Component,
    MapaP11Component,
    TabelaComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PrediosModule { }
