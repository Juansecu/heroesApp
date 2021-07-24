import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero, Publisher, PublisherDetails } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit'))
      this.activatedRoute.params
        .pipe(switchMap(({ heroId }) => this.heroesService.getHero(heroId)))
        .subscribe((hero) => (this.hero = hero));
  }

  removeHero(): void {
    this.heroesService
      .deleteHero(this.hero.id!)
      .subscribe((response) => this.router.navigate(['heroes']));
  }

  saveHero(): void {
    if (
      !this.hero.superhero.trim() ||
      !this.hero.publisher.trim() ||
      !this.hero.alter_ego.trim() ||
      !this.hero.first_appearance.trim() ||
      !this.hero.characters.trim()
    )
      return;

    if (this.hero.id)
      this.heroesService.updateHero(this.hero).subscribe(console.log);
    else
      this.heroesService
        .addHero(this.hero)
        .subscribe((hero) => this.router.navigate(['heroes', 'edit', hero.id]));
  }
}
