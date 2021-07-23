import { Component, OnInit } from '@angular/core';

import { Hero, Publisher, PublisherDetails } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-hero.component.html',
  styles: [],
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    superhero: '',
    publisher: Publisher.DcComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    image_url: '',
  };
  publishers: PublisherDetails[] = [
    {
      id: Publisher.DcComics,
      description: 'DC Comics house',
    },
    {
      id: Publisher.MarvelComics,
      description: 'Marvel Comics house',
    },
  ];

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {}

  saveHero(): void {
    if (
      !this.hero.superhero.trim() ||
      !this.hero.publisher.trim() ||
      !this.hero.alter_ego.trim() ||
      !this.hero.first_appearance.trim() ||
      !this.hero.characters.trim()
    )
      return;

    this.heroesService.addHero(this.hero).subscribe(console.log);
  }
}
