import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../typings/Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly url = 'http://localhost:3000/heroes';

  constructor(private readonly http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }
}
