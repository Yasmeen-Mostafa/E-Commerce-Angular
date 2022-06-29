import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  // private _flag: boolean = false;
  flagobserve: boolean = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.flagobserve = JSON.parse(localStorage.getItem('auth')!);
    if (this.flagobserve) {
      // this._router.navigate(['/']);
      return true;
    } else {
      this._router.navigate(['/auth/login']);
      return false;
    }
  }
  constructor(private _router: Router) {}
}
