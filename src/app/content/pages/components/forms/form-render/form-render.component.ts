import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service';
import { render } from '../../../../../../assets/renderJson'
import * as _ from 'lodash';
declare var $: any;
@Component({
  selector: 'm-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {
  FormjsonData;
  isValue: boolean;
  JsonHold;
  formSubmissionData;
  formData;
  public form: Object = {}
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private formDataService: GetDataToResolverService
  ) {

    // this.FormjsonData = localStorage.getItem('event')
    // this.form['components'] = JSON.parse(this.FormjsonData);
    // this.formDataService.getFormRenderData(this.form['components'])
  }

  async ngOnInit() {
    try {
      // this.FormjsonData = this.route.snapshot.data;
      // if (this.FormjsonData.message) {
      //   this.form['components'] = JSON.parse(this.FormjsonData.message);
      // } else {
      //   this.FormjsonData = [];
      // }
      this.renderForm()

    }
    catch (e) { }
  }

  renderForm() {
    this.formSubmissionData =  localStorage.getItem('formData') ? {'data': JSON.parse(localStorage.getItem('formData'))} : {}
    this.formData = { 'components': render.components };
  }


  onChange(e) {
    if (e.data && !(_.isEqual(this.formSubmissionData, e))) {    
      this.formSubmissionData = e;
    } 
  }


  onSubmit(submission) {
    localStorage.setItem('formData', JSON.stringify(submission['data']));
    // setTimeout(() => {
    // $("button").find( ".fa-refresh" ).css( "display", "none" );
    // },100)
  }
}
