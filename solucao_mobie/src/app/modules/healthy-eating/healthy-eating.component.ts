import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthy-eating',
  templateUrl: './healthy-eating.component.html',
  styleUrls: ['./healthy-eating.component.scss'],
})
export class HealthyEatingComponent implements OnInit {

  arrayImages = [
    {
      link: '',
      image: 'https://img.freepik.com/vetores-gratis/gente-minuscula-esportista-saudavel-com-comida-organica-rica-em-calcio-usos-de-calcio-suplemento-dietetico-de-calcio-ossos-fortes-e-conceito-de-dentes_335657-849.jpg?size=626&ext=jpg'
    },
  ]

  news = [
    {
      link: '',
      image: 'https://image.freepik.com/vetores-gratis/mulheres-minusculas-comendo-peixes-gordurosos-vitamina-d-queijo-e-ilustracao-vetorial-plana-para-banhos-de-sol-senhoras-de-desenhos-animados-usando-suplementos-alimentares-para-reducao-da-deficiencia-conceito-de-bem-estar-e-saude_74855-10175.jpg',
      title: 'BENEFÍCIOS DA VITAMINA D',
      subtitle: 'Nutricionista',
      text: ' A pandemia do coronavírus já dura vários meses e, durante esse período, a liberdade de ir e vir e o convívio social foram limitados. Para cumprir...',
      news: 'A pandemia do coronavírus já dura vários meses e, durante esse período, a liberdade de ir e vir e o convívio social foram limitados. Para cumprir a quarentena de maneira correta, o distanciamento social foi indicado por governos e instituições de saúde no mundo todo. No entanto, a solidão causada por essas restrições levantou outra preocupação: a saúde mental na pandemia. Com uma nova onda de casos crescendo, as medidas de prevenção para COVID-19 ainda devem ser seguidas, mas o cuidado com o bem-estar psíquico deve ser levado a sério.',
      font: 'https://www.pfizer.com.br/noticias/ultimas-noticias/saude-mental-na-pandemia-do-coronavirus-como-manter-o-bem-estar-em-tempos-de-distanciamento-social'
    },
    {
      link: '',
      image: 'https://image.freepik.com/vetores-gratis/alimento-saudavel-do-legume-de-fruto-da-pessoa-atletica-do-carater-da-construcao-do-homem-musculoso-isolado-no-branco-ilustracao-nutricao-adequada-esportiva_121223-903.jpg',
      title: 'CAFÉ DA MANHÃ',
      subtitle: 'SAÚDE FISÍCA',
      text: 'A saúde física e a saúde mental estão conectadas. O corpo pode ser impactado negativamente por nossas posturas, atitudes, emoções e até pensamentos...',
      news: '',
      font: ''
    },
  ]

  constructor(public router: Router) { }

  ngOnInit() { }

  goInfo() {
    this.router.navigate(['/tabs/detail-info']);
  }
}
