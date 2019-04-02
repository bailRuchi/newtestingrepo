import { Component, OnInit, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { serviceFormList } from '../../../../../../assets/serviceFormsFDOList'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CreateNewFormDilogComponent } from '../create-new-form-dilog/create-new-form-dilog.component';
import { ConfirmDeleteDilogBoxComponent } from '../confirm-delete-dilog-box/confirm-delete-dilog-box.component';
import { ApiService } from '../../../../../core/services/api.service';
import { environment } from '../../../../../../environments/environment'
@Component({
    selector: 'list-view',
    templateUrl: './listView.html',
    styleUrls: ['./list.component.scss']
})
export class ListViewComponent implements OnInit {
    @Input() serviceList;
    @Output() valueChange = new EventEmitter();
    CanActivate;
    canShow: boolean
    constructor(
        private router: Router,
        private _change: ChangeDetectorRef,
        private apiservice: ApiService,
        public dialog: MatDialog) { }

    ngOnInit() {

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
            this.valueChange.emit(res);
            this._change.detectChanges();
        })

    }
}
