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

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl);
  }

  getHero(heroId: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/${heroId}`);
  }
}
