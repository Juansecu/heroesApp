import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'heroes',
        component: HeroesListComponent,
      },
      {
        path: 'add-hero',
        component: AddHeroComponent,
      },
      {
        path: 'edit/:heroId',
        component: AddHeroComponent,
      },
      {
        path: 'search-hero',
        component: SearchHeroComponent,
      },
      {
        path: ':heroId',
        component: HeroComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'heroes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
