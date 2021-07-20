import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AddComponent,
    HeroComponent,
    HeroesListComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
})
export class HeroesModule {}
