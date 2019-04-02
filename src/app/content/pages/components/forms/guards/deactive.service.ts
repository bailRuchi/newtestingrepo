import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      return component.canDeactivate ? component.canDeactivate() : true;
    } else {
      return true;
    }
  }

}