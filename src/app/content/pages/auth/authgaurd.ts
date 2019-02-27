import { Injectable} from '@angular/core';
import { Router,ActivatedRoute,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router'
import { CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
  export class CanActiveGuard implements CanActivate {
    constructor(private myRoute: Router ,private snapShort:ActivatedRoute) {
    }
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('state',this.snapShort.snapshot)
        if (localStorage.getItem('userInfo')) {
        return true;
      } else {
        this.myRoute.navigate(["login"]);
        return false;
      }
    }
  
  }