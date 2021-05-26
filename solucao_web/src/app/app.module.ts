import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselOneComponent } from './components/carousel/carousel-one/carousel-one.component';
import { HomeComponent } from './pages/home/home.component';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';
import { CovidComponent } from './pages/covid/covid.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CardOneComponent } from './components/cards/card-one/card-one.component';
import { FooterOneComponent } from './layout/footer/footer-one/footer-one.component';
import { SectionOneComponent } from './components/sections/section-one/section-one.component';
import { HttpClientModule } from '@angular/common/http';
import * as echarts from 'echarts';
import { MatSelectModule } from '@angular/material/select';
import { NgxEchartsModule } from 'ngx-echarts';
import { StartComponent } from './pages/start/start.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { TermoDeUsoComponent } from './pages/termo-de-uso/termo-de-uso.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselOneComponent,
    HomeComponent,
    AlimentacaoComponent,
    AtividadeFisicaComponent,
    MentalEmocionalComponent,
    CovidComponent,
    CardOneComponent,
    FooterOneComponent,
    SectionOneComponent,
    StartComponent,
    LoginComponent,
    CadastroComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    TermoDeUsoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    HttpClientModule,
    MatSelectModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
