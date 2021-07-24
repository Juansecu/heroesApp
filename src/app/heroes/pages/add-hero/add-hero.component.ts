import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero, Publisher, PublisherDetails } from '../../typings/Hero';

import { HeroesService } from '../../services/heroes.service';

import { ConfirmActionComponent } from '../../components/confirm-action/confirm-action.component';

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
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar,
    private readonly heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit'))
      this.activatedRoute.params
        .pipe(switchMap(({ heroId }) => this.heroesService.getHero(heroId)))
        .subscribe((hero) => (this.hero = hero));
  }

  displaySnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  removeHero(): void {
    this.dialog
      .open(ConfirmActionComponent, {
        data: { ...this.hero },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result)
          this.heroesService.deleteHero(this.hero.id!).subscribe((response) => {
            this.displaySnackBar(
              `${this.hero.superhero} was removed from database successfully!`
            );
            this.router.navigate(['heroes']);
          });
      });
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
      this.heroesService
        .updateHero(this.hero)
        .subscribe((hero) =>
          this.displaySnackBar(
            `Hero ${hero.superhero} was updated successfully!`
          )
        );
    else
      this.heroesService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['heroes', 'edit', hero.id]);
        this.displaySnackBar(`${hero.superhero} was saved successfully!`);
      });
  }
}
