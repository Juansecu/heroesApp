import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../typings/Hero';

@Pipe({
  name: 'heroImage',
  pure: false,
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if (hero.image_url) return hero.image_url;
    return !hero.id ? 'assets/no-image.png' : `assets/heroes/${hero.id}.jpg`;
  }
}
