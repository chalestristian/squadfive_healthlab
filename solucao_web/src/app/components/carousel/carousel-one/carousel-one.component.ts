import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-one',
  templateUrl: './carousel-one.component.html',
  styleUrls: ['./carousel-one.component.scss']
})
export class CarouselOneComponent implements OnInit {

  @Input() arrayImages: any;
  constructor() { }

  ngOnInit(): void {
  }

}
