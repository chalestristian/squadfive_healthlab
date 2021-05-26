import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() image: string | undefined;
  @Input() route: string | undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
