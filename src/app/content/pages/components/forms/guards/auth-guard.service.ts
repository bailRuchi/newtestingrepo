import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import {  CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CreateNewFormDilogComponent } from '../create-new-form-dilog/create-new-form-dilog.component';
import { MatDialog } from '@angular/material';
// import { resolve } from 'dns';
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class AuthGuardService {

  constructor(
    public dialog: MatDialog,
    private myRoute: Router, private snapShort: ActivatedRoute) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const dialogRef = this.dialog.open(CreateNewFormDilogComponent, {
      width: '446px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       return true;
      } else {
        this.myRoute.navigateByUrl('forms');
        return false;
      }
    });
 
    return true;

    //   console.log("RouterStateSnapshot",this.myRoute.url)
    // } else {
    //   return true;
  }
}
