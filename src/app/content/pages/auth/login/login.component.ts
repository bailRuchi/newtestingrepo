import {
	Component,
	OnInit,
	Output,
	Input,
	ViewChild,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	HostBinding
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthNoticeService } from '../../../../core/auth/auth-notice.service';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerButtonOptions } from '../../../partials/content/general/spinner-button/button-options.interface';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import {
	AuthService,
	FacebookLoginProvider,
	GoogleLoginProvider
} from "angular-6-social-login";
import { ApiService } from '../../../../core/services/api.service';
import { environment } from '../../../../../environments/environment';
@Component({
	selector: 'm-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
	public model: any = { email: '123@gmail.com', password: '123' };
	@HostBinding('class') classes: string = 'm-login__signin';
	@Output() actionChange = new Subject<string>();
	public loading = false;

	@Input() action: string;

	@ViewChild('f') f: NgForm;
	errors: any = [];
	loginForm: FormGroup
	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: 'primary',
		spinnerColor: 'accent',
		fullWidth: false
	};

	constructor(
		private router: Router,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private cdr: ChangeDetectorRef,
		private socialAuthService: AuthService,
		private apiService: ApiService
	) {
		this.userLoginForm();
	}
	ngOnInit(): void {
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Use your account details to continue.`;
			this.authNoticeService.setNotice(initialNotice, 'success');
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
	}

	submitLogin(platform) {
		console.log(platform);

		let socialPlatformProvider;
		if (platform === "google") {
			socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		} else {
			socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
		}
		this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
			// this.apiService.postTypeRequest(`${environment.userManagement}login`, userData).then((res: any) => {
			// 	if (res) {
			// 		localStorage.setItem('userInfo', JSON.stringify(res));
					this.router.navigate(['/']);
			// 	}
			// })

		});
	}
	private userLoginForm(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
			password: new FormControl('', [
				Validators.required, Validators.minLength(2)
			])
		});
	}
	public async onLogin(formData): Promise<void> {
		try {
			this.loading = false;
			localStorage.setItem('userInfo', JSON.stringify(formData));
			this.router.navigate(['/'])
		}
		catch (e) {

		}
	}

	forgotPasswordPage(event: Event) {
		this.action = 'forgot-password';
		this.actionChange.next(this.action);
	}

	register(event: Event) {
		this.action = 'register';
		this.actionChange.next(this.action);
	}

}
