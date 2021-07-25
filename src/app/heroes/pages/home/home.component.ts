import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/auth/typings/User';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      mat-sidenav {
        min-width: 17rem;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  get user(): User {
    return this.authService.userProperties!;
  }

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}
