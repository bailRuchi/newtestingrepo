import { Injectable } from '@angular/core';
import { FormCreateComponent } from '../form-builder/form-builder.component';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, CanDeactivate, ActivatedRoute, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanDeactivate<FormCreateComponent> {
  constructor(
    private location: Location,
    public router: Router,
    public route: ActivatedRoute
  ) { }
  
  canDeactivate(component: FormCreateComponent, currentRoute: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let can = component.canDeactivate();
    if (!can) {
      const currentUrlTree = this.router.createUrlTree([], currentRoute);
      const currentUrl = currentUrlTree.toString();
      let isAgree = confirm('Are you sure?');

      return Observable.of(isAgree);

    } else {
      return true;
    }
  }

}