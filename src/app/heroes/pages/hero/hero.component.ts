import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ heroId }) => this.heroesService.getHero(heroId)))
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.router.navigate(['heroes', 'heroes']);
  }
}
