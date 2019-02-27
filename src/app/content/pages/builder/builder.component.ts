import { LayoutConfigStorageService } from '../../../core/services/layout-config-storage.service';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'm-builder',
	templateUrl: './builder.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent implements OnInit {
	@Input() model: any;
	@ViewChild('builderForm') form: NgForm;

	constructor(

	) {
	}

	ngOnInit(): void {}

}
