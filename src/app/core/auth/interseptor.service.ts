import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, tap, } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'
import { environment } from "../../../environments/environment";

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
        "Content-Type": "application/json",
        // Authorization: `JWT ${localStorage.getItem('Authorization')}`
      }
    });

    this._loadingService.apiStart();
    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          this._loadingService.apiEnd(); 
          if (request.method !== 'GET') {
            if (event.body.header.responseCode == environment.SUCCESS_CODE) {
              this.openSnackBar(event.body.header['responseMsg']);
            }
          }

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

  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: "api-success",
      horizontalPosition: 'center'
    });
  }

}
