import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../typings/Hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() {}

  ngOnInit(): void {}
}
