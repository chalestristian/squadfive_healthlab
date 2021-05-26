import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarOneComponent } from './components/navbar-one/navbar-one.component';
import { HomeComponent } from './pages/home/home.component';
import { AlimentacaoComponent } from './pages/alimentacao/alimentacao.component';
import { AtividadeFisicaComponent } from './pages/atividade-fisica/atividade-fisica.component';
import { MentalEmocionalComponent } from './pages/mental-emocional/mental-emocional.component';
import { CovidComponent } from './pages/covid/covid.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselOneComponent } from './components/carousel/carousel-one/carousel-one.component';
import { CardOneComponent } from './components/cards/card-one/card-one.component';
import { FooterOneComponent } from './layout/footer/footer-one/footer-one.component';
import { SectionOneComponent } from './components/sections/section-one/section-one.component';
import { HttpClientModule } from '@angular/common/http';
import * as echarts from 'echarts';
import { MatSelectModule } from '@angular/material/select';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [
    AppComponent,
    NavbarOneComponent,
    HomeComponent,
    AlimentacaoComponent,
    AtividadeFisicaComponent,
    MentalEmocionalComponent,
    CovidComponent,
    CarouselOneComponent,
    CardOneComponent,
    FooterOneComponent,
    SectionOneComponent
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
