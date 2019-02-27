import { Injectable } from '@angular/core';

@Injectable()
export class GetDataToResolverService {
  formData: object | null;
  constructor() {
  }

  getFormRenderData(formData) {
    return this.formData;
  }

  setFormRenderData(formData) {
    this.formData = formData;
  }
}
