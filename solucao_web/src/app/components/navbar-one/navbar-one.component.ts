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
      route: '/feedalimentar'
    },
    {
      name: 'Atividades Fisicas',
      route: '/feedalimentar'
    },
    {
      name: 'Mental & Emocional',
      route: '/feedalimentar'
    },
    {
      name: 'Covid-19',
      route: '/covid'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
