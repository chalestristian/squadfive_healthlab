import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    { path: 'https://www.10wallpaper.com/wallpaper/1366x768/1712/Summer_girl_coast_yoga_sport_4K_HD_1366x768.jpg' },
    { path: 'https://www.lgpdbrasil.com.br/wp-content/uploads/2019/05/saude_dados_lgpd-1920x1080.jpeg' },
  ];

  listCards = [
    {
      image: 'https://www.10wallpaper.com/wallpaper/1366x768/1712/Summer_girl_coast_yoga_sport_4K_HD_1366x768.jpg',
      title: 'Alimentação',
      description: 'N/d',
      route: '/alimentacao'
    },
    {
      image: 'https://www.10wallpaper.com/wallpaper/1366x768/1712/Summer_girl_coast_yoga_sport_4K_HD_1366x768.jpg',
      title: 'Atividade Fisica',
      description: 'N/d',
      route: '/fisicas'
    },
    {
      image: 'https://www.10wallpaper.com/wallpaper/1366x768/1712/Summer_girl_coast_yoga_sport_4K_HD_1366x768.jpg',
      title: 'Mental & Emocional ',
      description: 'N/d',
      route: '/mental-emocional'
    },
    {
      image: 'https://www.10wallpaper.com/wallpaper/1366x768/1712/Summer_girl_coast_yoga_sport_4K_HD_1366x768.jpg',
      title: 'COVID-19',
      description: 'N/d',
      route: '/covid'
    },
  ];

  listSection = [
    {
      titleBlack: 'First featurette heading.',
      titleClear: 'It’ll blow your mind.',
      description: 'Some great placeholder content for the first featurette here. Imagine some exciting prose here.',
      image: 'https://www.cardlogix.com/wp-content/uploads/500x500.png',
      position: true
    },
    {
      titleBlack: 'Oh yeah, it’s that good.',
      titleClear: 'See for yourself.',
      description: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
      image: 'https://www.cardlogix.com/wp-content/uploads/500x500.png',
      position: false
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
