import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Hero } from '../typings/Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly baseUrl = `${environment.serverUrl}/heroes`;

  constructor(private readonly http: HttpClient) {}

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.baseUrl, hero);
  }

  deleteHero(heroId: string): Observable<object> {
    return this.http.delete(`${this.baseUrl}/${heroId}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl);
  }

  getHero(heroId: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/${heroId}`);
  }

  getHeroSuggestions(searchTerm: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}?q=${searchTerm}&_limit=5`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrl}/${hero.id}`, hero);
  }
}
