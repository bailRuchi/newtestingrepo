import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/observable/of';
import { GetDataToResolverService } from './get-data-to-resolver.service'
@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<any>>{
  data: any;
  constructor(
    private formDataService: GetDataToResolverService
  ) { }

  resolve() {
    return Observable.of(this.formDataService.getFormRenderData(this.data));
  }
}
