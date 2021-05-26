import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-one',
  templateUrl: './navbar-one.component.html',
  styleUrls: ['./navbar-one.component.scss']
})
export class NavbarOneComponent implements OnInit {

  listRouterLink: any[] = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Alimentação',
      route: '/alimentacao'
    },
    {
      name: 'Atividades Fisicas',
      route: '/fisicas'
    },
    {
      name: 'Mental e Emocional',
      route: '/mental-emocional'
    },
    {
      name: 'COVID-19',
      route: '/covid'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
