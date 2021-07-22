import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search-hero.component.html',
  styles: [],
})
export class SearchHeroComponent implements OnInit {
  selectedHero!: Hero | undefined;

  searchTerm = '';
  heroes: Hero[] = [];

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {}

  searchHero(): void {
    this.heroesService
      .getHeroSuggestions(this.searchTerm.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;

    this.searchTerm = hero.superhero;

    this.heroesService
      .getHero(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
