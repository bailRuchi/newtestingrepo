import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, tap, } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterseptorService {
  startLoader: Subject<number> = new Subject();
  constructor(
    private _loadingService: LoadingService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(null, err => {
        if (err instanceof HttpErrorResponse) {
          this._loadingService.errorOccured();
          this.openSnackBar(err);
          if (request.url == 'https://mhweu-dpll-app-server-01-dev.azurewebsites.net/admin/admins' && err['status'] == 401) {
            localStorage.clear();
            this.router.navigate(['/login'])
          }
        }
      })
    );
  }

  openSnackBar(error) {
    const errorMessage = error["error"]["error"]["message"] ? error["error"]["error"]["message"] : 'Something Went Wrong';
    this.snackBar.open(errorMessage, '', {
      duration: 2000,
      panelClass: "api-error",
      horizontalPosition: 'center'
    });
  }
}
