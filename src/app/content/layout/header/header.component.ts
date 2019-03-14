import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../../../core/services/layout/header.service';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationStart,
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router
} from '@angular/router';
import { startWith, tap, delay } from 'rxjs/operators';
import { LayoutRefService } from '../../../core/services/layout/layout-ref.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingService } from '../../../core/auth/loading.service';

@Component({
	selector: 'm-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, AfterViewInit {
	
	// loader: any;
	@ViewChild('mHeader') mHeader: ElementRef;

	constructor(
		private router: Router,
		private layoutRefService: LayoutRefService,
		public headerService: HeaderService,
		public loader: LoadingBarService,
		private _loadingService: LoadingService
	) {
		// page progress bar percentage
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				// set page progress bar loading to start on NavigationStart event router
				this.loader.start();
			}
			if (event instanceof RouteConfigLoadStart) {
				this.loader.increment(35);
			}
			if (event instanceof RouteConfigLoadEnd) {
				this.loader.increment(75);
			}
			if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
				// set page progress bar loading to end on NavigationEnd event router
				this.loader.complete();
			}
		});
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		// keep header element in the service
		this.layoutRefService.addElement('header', this.mHeader.nativeElement);
		// this._loadingService.loader.pipe(
		// 	startWith(null),
		// 	delay(0),
		// 	tap((loader) => this.loader = loader)
		// ).subscribe();
	}
}
