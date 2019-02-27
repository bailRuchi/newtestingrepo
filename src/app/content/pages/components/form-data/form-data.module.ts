import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './form-data.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material/material.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormDataComponent,
      },

    ])
  ],
  declarations: [FormDataComponent]
})
export class FormDataModule { }
