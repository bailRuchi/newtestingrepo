import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'm-confirm-delete-dilog-box',
  templateUrl: './confirm-delete-dilog-box.component.html',
  styleUrls: ['./confirm-delete-dilog-box.component.scss']
})
export class ConfirmDeleteDilogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDilogBoxComponent>) { }

  ngOnInit() {
  }
  onClick(result?): void {
    this.dialogRef.close(result);
  }

}
