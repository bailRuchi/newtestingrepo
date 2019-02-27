import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'm-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {
  FormjsonData;
  isValue: boolean;
  public form: Object = {}
  constructor(private _location: Location,
    private route: ActivatedRoute,
    private formDataService: GetDataToResolverService
  ) {
    
    // this.FormjsonData = localStorage.getItem('event')
    // this.form['components'] = JSON.parse(this.FormjsonData);
    // this.formDataService.getFormRenderData(this.form['components'])
    this.FormjsonData = this.route.snapshot.data;
    this.form['components'] = JSON.parse(this.FormjsonData.message);
  }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

  onSubmit(event) {
    console.log(JSON.stringify(event));
  }
}
