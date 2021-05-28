import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { CovidComponent } from './pages/covid/covid.component';
import { HomeComponent } from './pages/home/home.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TermoDeUsoComponent } from './pages/termo-de-uso/termo-de-uso.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { FeedalimentarComponent } from './pages/aasubpages-content/alimentar/feedalimentar/feedalimentar.component';
import { CompulsaoalimentarComponent } from './pages/aasubpages-content/alimentar/alimentar-content/compulsaoalimentar/compulsaoalimentar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alimentacao',
    component: AlimentacaoComponent,
  },
  {
    path: 'fisicas',
    component: AtividadeFisicaComponent,
  },
  {
    path: 'mental-emocional',
    component: MentalEmocionalComponent,
  },
  {
    path: 'covid',
    component: CovidComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'termo-de-uso',
    component: TermoDeUsoComponent,
  },
  {
    path: 'esqueci-senha',
    component: EsqueciSenhaComponent,
  },
  {
    path: 'feedalimentar',
    component: FeedalimentarComponent,
  },
  {
    path: 'compulsaoalimentar',
    component: CompulsaoalimentarComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
