import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpSentEvent,HttpResponse, HttpErrorResponse,HttpUserEvent,HttpProgressEvent,HttpHeaderResponse } from '@angular/common/http';
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
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(request).pipe(
      finalize(() => {
        console.log(request,"request");
        
        // request completes, errors, or is cancelled
    })
      // tap(null, err => {
      //   if (err instanceof HttpErrorResponse) {
      //     this._loadingService.errorOccured();
      //     this.openSnackBar(err.message);
      //   }
      // })
    );
  }

  openSnackBar(error) {
    const errorMessage =  'Something Went Wrong';
    this.snackBar.open(errorMessage, '', {
      duration: 2000,
      panelClass: "api-error",
      horizontalPosition: 'center'
    });
  }
}
