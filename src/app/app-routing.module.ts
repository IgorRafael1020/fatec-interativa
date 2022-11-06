import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { AdministracaoComponent } from './predios/components/administracao/administracao.component';
import { LabDeMateriaisESistemasBiomedicosComponent } from './predios/components/lab-de-materiais-e-sistemas-biomedicos/lab-de-materiais-e-sistemas-biomedicos.component';
import { AreaDeServicoComponent } from './predios/components/area-de-servico/area-de-servico.component';
import { LabDeFisicaEEletroeletronicaComponent } from './predios/components/lab-de-fisica-e-eletroeletronica/lab-de-fisica-e-eletroeletronica.component';
import { LabDeAutomacaoEMateriaisComponent } from './predios/components/lab-de-automacao-e-materiais/lab-de-automacao-e-materiais.component';
import { LabDeFabricacaoMecanicaComponent } from './predios/components/lab-de-fabricacao-mecanica/lab-de-fabricacao-mecanica.component';
import { LabDeProjetosMecanicosComponent } from './predios/components/lab-de-projetos-mecanicos/lab-de-projetos-mecanicos.component';
import { LabDeIdiomasENucleoSocialComponent } from './predios/components/lab-de-idiomas-e-nucleo-social/lab-de-idiomas-e-nucleo-social.component';
import { LabDePolimerosEProcessosMetalurgicosComponent } from './predios/components/lab-de-polimeros-e-processos-metalurgicos/lab-de-polimeros-e-processos-metalurgicos.component';
import { CentralDeAulasComponent } from './predios/components/central-de-aulas/central-de-aulas.component';
import { LabDeTecnologiaDeInformacaoComponent } from './predios/components/lab-de-tecnologia-de-informacao/lab-de-tecnologia-de-informacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'campus', pathMatch: 'full' },

  { path: 'campus', component: MapaComponent },

  { path: 'p1', component: AdministracaoComponent },
  { path: 'p2', component: LabDeMateriaisESistemasBiomedicosComponent },
  //{ path: 'p3', component: AreaDeServicoComponent },
  { path: 'p4', component: LabDeFisicaEEletroeletronicaComponent },
  { path: 'p5', component: LabDeAutomacaoEMateriaisComponent },
  { path: 'p6', component: LabDeFabricacaoMecanicaComponent },
  { path: 'p7', component: LabDeProjetosMecanicosComponent },
  { path: 'p8', component: LabDeIdiomasENucleoSocialComponent },
  { path: 'p9', component: LabDePolimerosEProcessosMetalurgicosComponent },
  { path: 'p10', component: CentralDeAulasComponent },
  { path: 'p11', component: LabDeTecnologiaDeInformacaoComponent },


  /*{ path: '', redirectTo: 'chamados2', pathMatch: 'full' },

  { path: 'chamados', component: ChamadosComponent },

  { path: 'cadastro-atividade-planejada', component: AtividadePlanejadaComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-funcionarios', component: FuncionarioComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  
  { path: '**', redirectTo: 'not-found' }*/
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
