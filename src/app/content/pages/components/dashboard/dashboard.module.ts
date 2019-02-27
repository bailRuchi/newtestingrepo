import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormioModule } from 'angular-formio';
import { FormsModule } from '@angular/forms';
import { FormRenderComponent } from './form-render/form-render.component';
import { FormComponent } from './form/form.component';
// import { FormBuildrComponent } from './form-builder/form-builder.component';
import { MaterialModule } from '../../../../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ResolverService } from '../../../../core/services/resolver.service';
import { GetDataToResolverService } from '../../../../core/services/get-data-to-resolver.service';
@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		WidgetChartsModule,
		FormsModule,
		MatSidenavModule,
		FormioModule,
		MaterialModule,
		TranslateModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent,
				children: [
					{
						path: '',
						component: FormComponent,
						resolve: { message: ResolverService }
					},
					{
						path: 'form-render',
						component: FormRenderComponent,
						resolve: { message: ResolverService }
					},
				]
			},

		])
	],
	providers: [
		ResolverService,
		GetDataToResolverService
	],
	declarations: [
		DashboardComponent,
		FormRenderComponent,
		FormComponent,
	]
})
export class DashboardModule { }
