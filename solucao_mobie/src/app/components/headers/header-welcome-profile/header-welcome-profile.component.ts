import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-welcome-profile',
  templateUrl: './header-welcome-profile.component.html',
  styleUrls: ['./header-welcome-profile.component.scss'],
})
export class HeaderWelcomeProfileComponent implements OnInit {

  @Input() textInfo = 'Olá,'
  @Input() name = 'John Doe';
  constructor() { }

  ngOnInit() {}

}
