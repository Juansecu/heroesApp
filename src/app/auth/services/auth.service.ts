import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    return this.http
      .get<User>(`${this.baseUrl}/${userId}`)
      .pipe(tap((user) => (this.user = user)));
  }

  logout(): void {
    this.user = undefined;
  }
}
