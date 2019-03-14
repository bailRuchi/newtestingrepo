import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'm-create-new-form-dilog',
  templateUrl: './create-new-form-dilog.component.html',
  styleUrls: ['./create-new-form-dilog.component.scss']
})
export class CreateNewFormDilogComponent implements OnInit {
  confirmCreateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateNewFormDilogComponent>,
    private router: Router,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.createForm()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async  createForm() {
    try {
      this.confirmCreateForm = this.formBuilder.group({
        name: [null, Validators.compose([Validators.required])],
        description: [null, Validators.compose([Validators.required])],
      });
    }
    catch (err) {
      console.log(err);
    }
  }
  
  public async onSubmit(formData) {
    try {
      this.router.navigate(["/forms/form-builder"]);
      this.dialogRef.close();
    } catch (error) {
      console.log(error);
    }
    this.dialogRef.close();
  }
}
