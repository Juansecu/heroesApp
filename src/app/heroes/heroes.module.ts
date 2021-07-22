import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';

import { MaterialModule } from '../material/material.module';

import { HeroImagePipe } from './pipes/hero-image.pipe';

import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';

@NgModule({
  declarations: [
    AddHeroComponent,
    HeroComponent,
    HeroCardComponent,
    HeroesListComponent,
    HomeComponent,
    SearchHeroComponent,
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
