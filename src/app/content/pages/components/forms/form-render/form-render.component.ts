import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service';
import { render } from '../../../../../../assets/renderJson'
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
    // this.form['components']= render.components;
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
    // this.formDataId = formData['data']['Items'][0]['id'];
    this.formSubmissionData = {}
    this.formData = { 'components': render.components};
  }

  backClicked() {
    this._location.back();
  }

  onChange(e) {
   console.log(e);
   
  }

  onSubmit(event) {
    this.JsonHold =event.data 
    console.log(render.components ,"jsonData");
    render.components.filter(e=>{
      console.log(e.key == event.email2);
      
      // console.log(e.key != event.data);
    });
    console.log(event.data,"renderData");
    
  }

 
}
