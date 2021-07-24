import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../typings/Hero';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    return !hero.id ? 'assets/no-image.png' : `assets/heroes/${hero.id}.jpg`;
  }
}