import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CanActiveGuard } from './auth/authgaurd';
// import { NgxPermissionsGuard } from 'ngx-permissions';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [CanActiveGuard],
		children: [
			{
				path: '',
				loadChildren: './components/dashboard/dashboard.module#DashboardModule'
			}, {
				path: 'formrecord',
				loadChildren: './components/form-data/form-data.module#FormDataModule'
			},
			{
				path: 'settings',
				loadChildren: './components/settings/settings.module#SettingsModule'
			},
		]
	},
	{
		path: 'login',
		// canActivate: [CanActiveGuard],
		loadChildren: './auth/auth.module#AuthModule',
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
