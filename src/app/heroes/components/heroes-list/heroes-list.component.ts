import { Component, OnInit } from '@angular/core';

import { Hero } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [],
})
export class HeroesListComponent implements OnInit {
  heroes!: Hero[];

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((response) => (this.heroes = response));
  }
}
