import { Injectable, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { serviceFormList } from './../../../assets/serviceFormsFDOList'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CreateNewFormDilogComponent } from './../../content/pages/components/forms/create-new-form-dilog/create-new-form-dilog.component'
import { ConfirmDeleteDilogBoxComponent } from './../../content/pages/components/forms/confirm-delete-dilog-box/confirm-delete-dilog-box.component';
import { ApiService } from '../../core/services/api.service';
import { environment } from '../../../environments/environment'
import { catchError, finalize, map, tap, } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataTableService {

    constructor(private router: Router,
        private _change: ChangeDetectorRef,
        private apiservice: ApiService,
        public dialog: MatDialog) {
    }


    refresh() {
        this.getList();
    }

    getList() {
        const id = "1"
        return this.apiservice.getTypeRequest(`${environment["api_url"]}/getFormsByOwnerId`, id).pipe(map(res => {
            if (res) {
                // this.canShow = true;
                // this.serviceList = res.response;
            }
            else {
                // this.canShow = false;
            }
            this._change.detectChanges();

        }))
    }

    selectUserData(id) {
        this.router.navigate(["/forms/form-data", id]);
    }
    OnClickEdit(id) {
        // this.CanActivate = true;
        // localStorage.setItem('CanActivate', this.CanActivate);
        if (id) {
            this.router.navigate(["/forms/form-builder", id]);
        }
    }

    openDialog(): void {
        this.router.navigate(["/forms/form-builder"]);
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
        this.apiservice.deleteTypeRequest(`${environment["api_url"]}/deleteFormById`, id).subscribe(res => {
            this.getList();
            // this.serviceList = this.serviceList.filter(e => e.id != id)
            this._change.detectChanges();
        })

    }
}
