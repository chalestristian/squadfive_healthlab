import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }

  detailMe = [
    {
      icon: 'https://engenhariacivil.ufms.br/files/2019/04/icon-calendar.png',
      text: 'Idade: 20 Anos'
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/876/876417.png',
      text: 'Altura: 1,70m'
    },
    {
      icon: 'https://images.vexels.com/media/users/3/127652/isolated/preview/3fe3111c03b0095ad04e11dc093c950f-balan-ccedil-a-plana-anal-oacute-gica-de-peso-by-vexels.png',
      text: 'Peso: 52,8Kg'
    },
    {
      icon: 'https://img3.androidappsapk.co/y5G9NIkLEBWfo-AYA00eH7DPtJGcvKqhi36pjpik0Y1oRYiwXXLyUHvvoMidPNL7JRU0=s300',
      text: 'Abaixo do IMC'
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/1995/1995895.png',
      text: 'Problemas respiratório: Não'
    },
    {
      icon: 'https://images.vexels.com/media/users/3/200161/isolated/lists/0d96b6587f7b07b27e87bffe4f17e943-estetoscopio-duotonico.png',
      text: 'Problemas cardíaco: Não'
    },
    {
      icon: 'https://iconarchive.com/download/i107562/google/noto-emoji-travel-places/42491-hospital.ico',
      text: 'Possuí algum problema: Não'
    },
  ]

  exit() {
    this.router.navigate(['/auth']);
  }
}
