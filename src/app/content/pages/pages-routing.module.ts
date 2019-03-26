import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CanActiveGuard } from './auth/authgaurd';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [CanActiveGuard],
		children: [
			{
				path: '',
				redirectTo: 'forms',
				pathMatch: 'full'
			}, {
				path: 'forms',
				loadChildren: './components/forms/forms.module#FormDataModule',
			},
			{
				path: 'user-management',
				loadChildren: './components/user-management/user-management.module#UserManagementModule',
			},

		]
	},
	{
		path: 'login',
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
