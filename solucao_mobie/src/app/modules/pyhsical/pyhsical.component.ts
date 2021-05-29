import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pyhsical',
  templateUrl: './pyhsical.component.html',
  styleUrls: ['./pyhsical.component.scss'],
})
export class PyhsicalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() { }

  
  goInfo() {
    this.router.navigate(['/tabs/detail-info-video']);
  }

  arrayImages = [
    {
      link: '',
      image: 'https://ww6.generali.pt/generali/images/Flex%C3%B5es%20de%20triceps7.gif'
    },
    {
      link: '',
      image: 'https://ww6.generali.pt/generali/images/Corrida%20de%20joelhos7.gif'
    },
    {
      link: '',
      image: 'https://ww6.generali.pt/generali/images/Escalador7.gif'
    },
    {
      link: '',
      image: 'https://ww6.generali.pt/generali/images/Flex%C3%B5es%20de%20triceps7.gif'
    },
  ]

  typesMed = [
    {
      link: '',
      image: 'https://image.freepik.com/vector-gratis/mujer-joven-haciendo-ejercicios-yoga-linea-moderno-apartamento-moda-concepto-entrenamientos-linea-transmision-vivo-educacion-internet_217194-28.jpg'
    },
    {
      link: '',
      image: 'https://img.freepik.com/vetores-gratis/mulher-jovem-pratica-ioga-pratica-fisica-e-espiritual_186332-529.jpg?size=338&ext=jpg' 
    },
    {
      link: '',
      image: 'https://image.freepik.com/vetores-gratis/conceito-de-treinamento-em-casa_23-2148483767.jpg'
    },
    {
      link: '',
      image: 'https://image.freepik.com/vetores-gratis/homem-correndo-no-parque-ele-esta-fazendo-atividade-fisica-ao-ar-livre-no-parque_186332-450.jpg'
    },
    {
      link: '',
      image: 'https://image.freepik.com/vetores-gratis/conceito-de-treinamento-em-casa_23-2148483768.jpg'
    },
    {
      link: '',
      image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2219871-uma-menina-jovem-esta-sentada-em-uma-posicao-de-lotus-contra-um-fundo-de-plantas-ioga-na-natureza-meditacao-relaxamento-ilustracao-plana-ilustracao-isolada-em-um-fundo-branco-vetor.jpg'
    },
  ]
}
