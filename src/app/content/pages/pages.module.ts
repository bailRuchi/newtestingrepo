import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterseptorService } from '../../core/auth/interseptor.service';
import { ErrorInterseptorService } from '../../core/auth/error-interseptor.service';
import { MatSnackBarModule, MatProgressBarModule } from '@angular/material';

@NgModule({
	declarations: [
		PagesComponent,
		ErrorPageComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		MatSnackBarModule,
		MatProgressBarModule
	],
	exports: [LayoutModule],

	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterseptorService,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterseptorService,
			multi: true
		}
	]
})
export class PagesModule { }