import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, tap, } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class InterseptorService {
  token: any;
  startLoader: Subject<number> = new Subject();
  constructor(
    private _loadingService: LoadingService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
     this.token = localStorage.getItem('userInfo')
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `JWT ${localStorage.getItem('Authorization')}`
      }
    });
    this._loadingService.apiStart();

    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          this._loadingService.apiEnd();
          console.log(request.url,"hfdshf")
          this.openSnackBar(event);
          // if (request.method !== 'GET') {
          //   this.openSnackBar(event);
          // }
        }
        return event;
      }, catchError((err) => {
        if (event instanceof HttpErrorResponse) {
          this._loadingService.errorOccured();
        }
        return throwError(err);
      }))
    );

  }

  openSnackBar(event) {
    this.snackBar.open('Success', '', {
      duration: 2000,
      panelClass: "api-success",
      horizontalPosition: 'center'
    });
  }

}
