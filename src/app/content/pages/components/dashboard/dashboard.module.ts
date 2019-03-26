import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		WidgetChartsModule,
		MatSidenavModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent,
			},

		])
	],
	declarations: [
		DashboardComponent,
	]
})
export class DashboardModule { }
