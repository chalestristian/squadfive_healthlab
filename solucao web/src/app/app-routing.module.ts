import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { CovidComponent } from './pages/covid/covid.component';
import { HomeComponent } from './pages/home/home.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
