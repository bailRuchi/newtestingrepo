import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {
  }

  async OnCreateForm() {
    try {
      return await this.http.get(`${environment["base_url"]}`).toPromise();
    }
    catch (error) {
      throw (error);
    }
  }

  async OnEditForm() {
    try {
      return await this.http.get(`${environment["base_url"]}`).toPromise();
    }
    catch (error) {
      throw (error);
    }
  }


  async OnFormRender() {
    try {
      return await this.http.get(`${environment["base_url"]}`).toPromise();
    }
    catch (error) {
      throw (error);
    }
  }

}
