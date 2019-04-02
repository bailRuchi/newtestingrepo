import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service';
import * as _ from 'lodash';
import { ApiService } from '../../../../../core/services/api.service';
import { environment } from './../../../../../../environments/environment';
import { MatSnackBar } from '@angular/material';

declare var $: any;
@Component({
  selector: 'm-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRenderComponent implements OnInit {
  FormjsonData;
  isValue: boolean;
  JsonHold;
  formSubmissionData;
  formData = {};
  formId;
  getDataList: any;
  public form: Object = {}
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private formDataService: GetDataToResolverService,
    private apiService: ApiService,
    private change: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {
  }

  async ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get("id");
    try {
      this.getDataList = this.apiService.getTypeRequest(`${environment["api_url"]}/getFormSchemaByFormId`, this.formId).subscribe(res => {
        if (res && res['response'].components.length) {
          this.formData['components'] = res['response'].components;
        }
        this.change.detectChanges();
      })
    }
    catch (e) { }
  }

  // renderForm() {
  //   this.formSubmissionData = localStorage.getItem('formData') ? { 'data': JSON.parse(localStorage.getItem('formData')) } : {}
  //   this.formData = { 'components': render.components };
  //   console.log(this.formData);

  // }


  onChange(e) {
    if (e.data && !(_.isEqual(this.formSubmissionData, e))) {
      this.formSubmissionData = e;
    }
  }


  onSubmit(submission) {
    let formSubmitData = submission['data'];
    let data = [];
    if (formSubmitData) {
      let flag = false;
      Object.keys(formSubmitData).forEach((value) => {
        if (value != 'submit') {
          console.log(formSubmitData[value])
          if (formSubmitData[value] && formSubmitData[value].length) {
            flag = true;
          }
        }
      })
      if (!flag) {
        $("button").find(".fa-refresh").css("display", "none");
        this.snackBar.open('Please fill form first', '', {
          duration: 2000,
          panelClass: "api-success",
          horizontalPosition: 'center'
        });
        return false;
      }
      Object.keys(formSubmitData).forEach((value) => {
        if (value != 'submit') {
          this.formData['components'].forEach(val => {
            if (val.key == value) {
              data.push({
                key: val.key,
                value: formSubmitData[value],
                label: val.label
              })
            }
          })
        }
      })

      let formDataTobeSubmit = {};
      formDataTobeSubmit['data'] = data;
      formDataTobeSubmit['formId'] = this.formId
      formDataTobeSubmit['userId'] = "1"
      formDataTobeSubmit['version'] = environment.apiVersion
      this.apiService.postTypeRequest(`${environment["data_url"]}/addFormData`, formDataTobeSubmit).subscribe(res => {
        if (res) {
          $("button").find(".fa-refresh").css("display", "none");
          this._location.back();
        }

      })
      // localStorage.setItem('formData', JSON.stringify(submission['data']));

    }
  }
  ngOnDestroy() {
    this.getDataList.unsubscribe();
  }
}
