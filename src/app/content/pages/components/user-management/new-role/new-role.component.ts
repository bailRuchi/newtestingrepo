import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'm-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent implements OnInit {
  addNewRoleForm: FormGroup;
  date = new Date();  
  maxDate = (new Date().getFullYear()).toString()+"-0"+(new Date().getMonth()+1).toString()+"-"+(new Date().getDate()).toString();
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.addNewRoleForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
      ])],
      'fristName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'mobile': [null, Validators.required],
      'user_gender': [null, Validators.required],
      'dob': [null, Validators.required],
    })
  }

  ngOnInit() {
  }

  dateChange(event){
    console.log(event);
  }
  onsubmit(formData) {
  }
  cancel(){
    this.addNewRoleForm.reset()
  }

}
