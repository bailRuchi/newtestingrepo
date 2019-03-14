import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
// import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuSectionComponent } from './aside/menu-section/menu-section.component';
import { CoreModule } from '../../core/core.module';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule, MatTabsModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './header/topbar/topbar.component';
import { LanguageSelectorComponent } from './header/topbar/language-selector/language-selector.component';
import { ErrorInterseptorService } from '../../core/auth/error-interseptor.service';
import { MatSnackBarModule } from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterseptorService } from '../../core/auth/interseptor.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		// SubheaderComponent,
		TopbarComponent,
		LanguageSelectorComponent,
		BrandComponent,
		AsideLeftComponent,
		MenuSectionComponent,
		MenuHorizontalComponent,

	],
	exports: [
		HeaderComponent,
		FooterComponent,
		// SubheaderComponent,
		LanguageSelectorComponent,
		TopbarComponent,
		BrandComponent,
		AsideLeftComponent,
		MenuHorizontalComponent,
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
		},
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
	],
	imports: [
		CommonModule,
		RouterModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule.forRoot(),
	]
})
export class LayoutModule { }
