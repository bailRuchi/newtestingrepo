
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
  constructor() { }

  ngOnInit() {

  }

}