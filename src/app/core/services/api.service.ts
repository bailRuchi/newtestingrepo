import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { HttpHeaders, } from '@angular/common/http';
import { catchError, finalize, map, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Success: boolean;
  constructor(public http: HttpClient) {
  }


  getTypeRequest(url, userId) {

    return this.http.get(`${environment["base_url"]}${url}?id=${userId}`).pipe(map(res => {
      if (res['header'].responseCode == environment.SUCCESS_CODE) {
        return res;
      }
      else {

        return false;
      }

    }));
  }

  postTypeRequest(url, payload) {
    return this.http.post(`${environment["base_url"]}${url}`, payload).pipe(map(res => {
      if (res['header'].responseCode == environment.SUCCESS_CODE) {
        return res;
      }
      else {
        return false;
      }
    }));
  }

  deleteTypeRequest(url, formId) {

    return this.http.post(`${environment["base_url"]}${url}?formId=${formId}`, formId).pipe(map(res => {
      if (res['header'].responseCode == environment.SUCCESS_CODE) {
        return res;
      }
      else {
        return false;
      }
    }));

  }



  googleLogout(id) {
    this.http.post(`${environment[`googleLogout`]}`, id)
  }



}
