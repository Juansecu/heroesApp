import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';

@NgModule({
  declarations: [
    AddHeroComponent,
    HeroComponent,
    HeroesListComponent,
    HomeComponent,
    SearchHeroComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
