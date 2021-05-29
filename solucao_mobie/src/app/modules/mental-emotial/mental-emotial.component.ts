import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mental-emotial',
  templateUrl: './mental-emotial.component.html',
  styleUrls: ['./mental-emotial.component.scss'],
})
export class MentalEmotialComponent implements OnInit {

  arrayImages = [
    {
      link: '',
      image: 'https://www.nucleode-stress.com.br/wp-content/uploads/2020/10/dia-mundial-da-saude-mental.png'
    },
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
    }
  ]

  constructor(public router: Router) { }

  ngOnInit() { }

  goInfoNews(link) {
    this.router.navigate([link]);
  }
}
