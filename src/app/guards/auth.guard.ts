import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url === '/login') {
      return this.isNotLoggedIn();
    } else {
      return this.isLoggedIn();
    }
  }

  private isLoggedIn(): boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }

  private isNotLoggedIn(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('tabs');
      return false;
    }

    return true;
  }

}
