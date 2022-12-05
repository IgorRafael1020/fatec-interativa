import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministracaoComponent } from './predios/components/p1-administracao/administracao.component';
import { LabDeMateriaisESistemasBiomedicosComponent } from './predios/components/p2-lab-de-materiais-e-sistemas-biomedicos/lab-de-materiais-e-sistemas-biomedicos.component';
import { LabDeFisicaEEletroeletronicaComponent } from './predios/components/p4-lab-de-fisica-e-eletroeletronica/lab-de-fisica-e-eletroeletronica.component';
import { LabDeAutomacaoEMateriaisComponent } from './predios/components/p5-lab-de-automacao-e-materiais/lab-de-automacao-e-materiais.component';
import { LabDeFabricacaoMecanicaComponent } from './predios/components/p6-lab-de-fabricacao-mecanica/lab-de-fabricacao-mecanica.component';
import { LabDeProjetosMecanicosComponent } from './predios/components/p7-lab-de-projetos-mecanicos/lab-de-projetos-mecanicos.component';
import { LabDePolimerosEProcessosMetalurgicosComponent } from './predios/components/p9-lab-de-polimeros-e-processos-metalurgicos/lab-de-polimeros-e-processos-metalurgicos.component';
import { CentralDeAulasComponent } from './predios/components/p10-central-de-aulas/central-de-aulas.component';
import { LabDeTecnologiaDeInformacaoComponent } from './predios/components/p11-lab-de-tecnologia-de-informacao/lab-de-tecnologia-de-informacao.component';


const routes: Routes = [
  { path: '', redirectTo: 'campus', pathMatch: 'full' },

  { path: 'campus', component: HomeComponent },

  { path: 'p1', component: AdministracaoComponent },
  { path: 'p2', component: LabDeMateriaisESistemasBiomedicosComponent },
  { path: 'p4', component: LabDeFisicaEEletroeletronicaComponent },
  { path: 'p5', component: LabDeAutomacaoEMateriaisComponent },
  { path: 'p6', component: LabDeFabricacaoMecanicaComponent },
  { path: 'p7', component: LabDeProjetosMecanicosComponent },
  { path: 'p9', component: LabDePolimerosEProcessosMetalurgicosComponent },
  { path: 'p10', component: CentralDeAulasComponent },
  { path: 'p11', component: LabDeTecnologiaDeInformacaoComponent },

  { path: '**', redirectTo: 'campus' }

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
