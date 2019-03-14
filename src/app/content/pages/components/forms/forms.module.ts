import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDataComponent } from './forms.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material/material.module'
import { TranslateModule } from '@ngx-translate/core';
import { FormsDataListComponent } from './form-data-list/form-data-list.component';
import { FormDataComponent } from './form-data-list/form-data/form-data.component';
import { FormioModule } from 'angular-formio';
import { MatSidenavModule } from '@angular/material';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { PartialsModule } from '../../../partials/partials.module';
import { LayoutModule } from '../../../layout/layout.module';
import { ResolverService } from '../../../../core/services/resolver.service';
import { GetDataToResolverService } from '../../../../core/services/get-data-to-resolver.service';
import { ApiService } from '../../../../core/services/api.service';
import { FormRenderComponent } from './form-render/form-render.component';
import { FormCreateComponent } from './form-builder/form-builder.component';
import { CreateNewFormDilogComponent } from './create-new-form-dilog/create-new-form-dilog.component';
import { ConfirmDeleteDilogBoxComponent } from './confirm-delete-dilog-box/confirm-delete-dilog-box.component'
import './form-builder/uploadLogo';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    PartialsModule,
    WidgetChartsModule,
    MatSidenavModule,
    FormioModule,
    MaterialModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormsDataComponent,
        children: [{
          path: '',
          component: FormsDataListComponent,
        }]
      },

      {
        path: 'form-render/:id',
        component: FormRenderComponent,
        resolve: { message: ResolverService }
      },
      {
        path: 'form-builder',
        component: FormCreateComponent,
        resolve: { message: ResolverService }
      }, {
        path: 'form-builder/:id',
        component: FormCreateComponent,
        resolve: { message: ResolverService }
      },
      {
        path: 'form-data/:id',
        component: FormDataComponent,
      },

    ])
  ],
  exports: [
    LayoutModule,

  ],
  entryComponents: [
    CreateNewFormDilogComponent,
    ConfirmDeleteDilogBoxComponent
  ],
  providers: [
    ResolverService,
    GetDataToResolverService,
    ApiService,
  ],
  declarations: [
    FormsDataComponent, 
    FormsDataListComponent, 
    FormDataComponent, 
    FormCreateComponent, 
    FormRenderComponent, 
    CreateNewFormDilogComponent, 
    ConfirmDeleteDilogBoxComponent
  ]
})
export class FormDataModule { }
