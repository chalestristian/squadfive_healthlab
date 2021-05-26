import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  @Input() position: any;
  @Input() titleBlack: any;
  @Input() titleClear: any;
  @Input() description: any;
  @Input() image: any;
  constructor() { }

  ngOnInit(): void {
  }

}
