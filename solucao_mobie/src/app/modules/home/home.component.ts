import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }

  arrayImages = [
    {
      link: '',
      image: 'https://media-manager.noticiasaominuto.com.br/1920/naom_594a5c9a109bf.jpg'
    },
    {
      link: '',
      image: 'https://ericasitta.files.wordpress.com/2020/12/saued-mental-01_prancheta-1.jpg'
    },
    {
      link: '',
      image: 'https://drcarlosbessa.com.br/wp-content/uploads/2018/12/2018-12-20-WP-Dr.-Carlos-Bessa.png'
    }
  ]

  typesMed = [
    {
      link: '/tabs/pyshical',
      image: '/assets/images/CORONAVIRUS-SEDENTARISMO-_CORRENDO.png'
    },
    {
      link: '/tabs/mental-emotial',
      image: '/assets/icon/icon-mental.jpg'
    },
    {
      link: '/tabs/healthy',
      image: '/assets/images/CORONAVIRUS-SEDENTARISMO-_COMIDA.png'
    }
  ]

  news = [
    {
      link: '/tabs/detail-info',
      image: 'https://distrito.me/wp-content/uploads/2020/04/mercado_de_saude.png',
      title: 'SAÚDE MENTAL NA PANDEMIA',
      subtitle: 'Saúde Mental & Emocional',
      text: ' A pandemia do coronavírus já dura vários meses e, durante esse período, a liberdade de ir e vir e o convívio social foram limitados. Para cumprir...',
      news: 'A pandemia do coronavírus já dura vários meses e, durante esse período, a liberdade de ir e vir e o convívio social foram limitados. Para cumprir a quarentena de maneira correta, o distanciamento social foi indicado por governos e instituições de saúde no mundo todo. No entanto, a solidão causada por essas restrições levantou outra preocupação: a saúde mental na pandemia. Com uma nova onda de casos crescendo, as medidas de prevenção para COVID-19 ainda devem ser seguidas, mas o cuidado com o bem-estar psíquico deve ser levado a sério.',
      font: 'https://www.pfizer.com.br/noticias/ultimas-noticias/saude-mental-na-pandemia-do-coronavirus-como-manter-o-bem-estar-em-tempos-de-distanciamento-social'
    },
    {
      link: '/tabs/detail-info',
      image: 'https://img.freepik.com/vetores-gratis/processo-metabolico-da-mulher-em-dieta_74855-6569.jpg?size=626&ext=jpg',
      title: 'TRANSTORNOS MENTAIS',
      subtitle: 'SAÚDE FISÍCA',
      text: 'A saúde física e a saúde mental estão conectadas. O corpo pode ser impactado negativamente por nossas posturas, atitudes, emoções e até pensamentos...',
      news: '',
      font: ''
    },
  ]

  goInfo(link) {
    this.router.navigate([link]);
  }

  goInfoNews(link) {
    this.router.navigate([link]);
  }
}
