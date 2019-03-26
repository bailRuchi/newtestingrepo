
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { LoadingService } from '../../../../core/auth/loading.service';
import { startWith, tap, delay } from 'rxjs/operators';
@Component({
  selector: 'm-form-data',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsDataComponent implements OnInit {
  loader: boolean;
  constructor(private _loadingService: LoadingService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this._loadingService.loader.pipe(
      startWith(null),
      delay(0),
      tap((loader) => this.loader = loader)
    ).subscribe();
  }



}