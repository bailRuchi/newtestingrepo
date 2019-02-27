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
import {
	SocialLoginModule,
	AuthServiceConfig,
	FacebookLoginProvider,
	GoogleLoginProvider
} from "angular-6-social-login";
import { MaterialModule } from '../../../material/material.module'

export function getAuthServiceConfigs() {
	let config = new AuthServiceConfig([
		{
			id: FacebookLoginProvider.PROVIDER_ID,
			provider: new FacebookLoginProvider("383858135766611")
		},
		{
			id: GoogleLoginProvider.PROVIDER_ID,
			provider: new GoogleLoginProvider("442633534598-0r2am1cm10m728ihvfn1la7ceiqfr0av.apps.googleusercontent.com") // ADD ID HERE :)
		}
	]);
	return config;
}
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		SocialLoginModule,
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
		{
			provide: AuthServiceConfig,
			useFactory: getAuthServiceConfigs
		}
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		AuthNoticeComponent
	]
})
export class AuthModule { }
