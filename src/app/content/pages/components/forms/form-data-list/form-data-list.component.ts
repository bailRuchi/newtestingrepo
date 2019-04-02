import { Component, OnInit, ChangeDetectorRef, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CreateNewFormDilogComponent } from '../create-new-form-dilog/create-new-form-dilog.component';
import { ConfirmDeleteDilogBoxComponent } from '../confirm-delete-dilog-box/confirm-delete-dilog-box.component';
import { ApiService } from '../../../../../core/services/api.service';
import { environment } from '../../../../../../environments/environment'
import 'rxjs/Rx';
@Component({
  selector: 'm-data-list',
  templateUrl: './form-data-list.component.html',
  styleUrls: ['./form-data-list.component.scss']
})
export class FormsDataListComponent implements OnInit {
  serviceList: any;
  CanActivate;
  canShow: boolean;
  onActive = false;
  getDataList: any;
  userSubscription;
  // mode = localStorage.getItem('mode');
  mode = 'grid';
  constructor(
    private router: Router,
    private _change: ChangeDetectorRef,
    private apiservice: ApiService,
    public dialog: MatDialog) {
    if (!this.mode) {
      // localStorage.setItem('mode', 'list');
      this.mode = 'list';
    }
  }

  ngOnInit() {
    this.getList();

  }

  changeMode(type) {
    // localStorage.setItem('mode', type);
    this.mode = type;
  }
  refresh() {
    this.getList();
  }

  getList() {
    const id = "1"
    this.getDataList = this.apiservice.getTypeRequest(`${environment["api_url"]}/getFormsByOwnerId`, id).subscribe(res => {
      if (res) {
        this.canShow = true;
        this.serviceList = res['response'];
        this._change.detectChanges();
      } else {
        this.canShow = false;
      }
      this._change.detectChanges();
    });
  }

  selectUserData(id) {
    this.router.navigate(["/forms/form-data", id]);
  }
  OnClickEdit(id) {
    this.CanActivate = true;
    localStorage.setItem('CanActivate', this.CanActivate);
    if (id) {
      this.router.navigate(["/forms/form-builder", id]);
    }
  }

  openDialog(): void {
    this.router.navigate(["/forms/form-builder"]);
  }
  displayCounter(value) {
    this.getList()
  }

  ngOnDestroy() {
    this.getDataList.unsubscribe();
  }
}
