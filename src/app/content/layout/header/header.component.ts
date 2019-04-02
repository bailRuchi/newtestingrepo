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
	) {
		// page progress bar percentage
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.layoutRefService.addElement('header', this.mHeader.nativeElement);

	}
}
