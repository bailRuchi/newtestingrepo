import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { serviceFormList } from '../../../../../../assets/serviceFormsFDOList'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNewFormDilogComponent } from '../create-new-form-dilog/create-new-form-dilog.component';
import { ConfirmDeleteDilogBoxComponent } from '../confirm-delete-dilog-box/confirm-delete-dilog-box.component';
@Component({
  selector: 'm-data-list',
  templateUrl: './form-data-list.component.html',
  styleUrls: ['./form-data-list.component.scss']
})
export class FormsDataListComponent implements OnInit {
  serviceList: any;
  CanActivate;
  constructor(
    private router: Router,
    private _change: ChangeDetectorRef,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.serviceList = serviceFormList.formsList;
  }

  selectUserData(id) {
    this.router.navigate(["/forms/form-data", id]);
  }
  OnClickEdit() {
    this.CanActivate =true;
    localStorage.setItem('CanActivate',this.CanActivate);
    let id = 2;
    if(id){
    this.router.navigate(["/forms/form-builder", id]);
    }
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateNewFormDilogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  async deleteDilogBox(id) {
    const dialogRef = await this.dialog.open(ConfirmDeleteDilogBoxComponent, {
      width: '300px',
      data: {}
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteList(id)
      }
    });
  }

  async deleteList(id) {
    this.serviceList = await this.serviceList.filter(e => e.resourceGroupId != id)
    this._change.detectChanges();
  }
}
