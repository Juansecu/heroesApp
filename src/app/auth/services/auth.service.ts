import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from '../typings/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | undefined;

  private readonly baseUrl = `${environment.serverUrl}/users`;

  get userProperties(): User | undefined {
    return { ...this.user! };
  }

  constructor(private readonly http: HttpClient) {}

  login(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('userId', user.id!))
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
    this.user = undefined;
  }

  verifyAuthentication(): Observable<boolean> {
    if (localStorage.getItem('userId'))
      return this.http.get<User>(`${this.baseUrl}`).pipe(
        map((user) => {
          this.user = user;
          return true;
        })
      );
    return of(false);
  }
}
