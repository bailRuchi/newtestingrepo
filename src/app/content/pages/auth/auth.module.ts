import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerButtonModule } from '../../partials/content/general/spinner-button/spinner-button.module';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';

import { MaterialModule } from '../../../material/material.module'
 

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		SpinnerButtonModule,
		RouterModule.forChild([
			{
				path: '',
				component: AuthComponent
			}
		])
	],
	providers: [

		
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		AuthNoticeComponent
	]
})
export class AuthModule { }
