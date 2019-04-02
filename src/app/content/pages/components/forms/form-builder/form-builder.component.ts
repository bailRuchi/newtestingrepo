import { Component, HostListener, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { field } from '../../../../../../assets/builderComponent'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service'
import { TranslationService } from '../../../../../core/services/translation.service';
import { ApiService } from '../../../../../core/services/api.service';
declare var $: any;
import { Field_Hi, Form_Hi, Button_Hi } from '../../../../../config/i18n/component_hi';
import { Field_En, Form_En, Button_En } from '../../../../../config/i18n/component_en';
import { Formio } from 'formiojs';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DialogService } from './../dialog.service';
import { environment } from '../../../../../../environments/environment'
@Component({
	selector: 'm-form',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormCreateComponent implements OnInit, AfterViewInit {
	@ViewChild('json') jsonElement?: ElementRef;
	selectedView = 'mobile';
	FormjsonData;
	isValue: boolean;
	disableData: any;
	view = 'phoneview';
	public form: Object = { components: [] };
	public config: any;
	formTemplate = {};
	buttonTitle = "Save Form";
	imageBase64: string;
	checked = false;
	user: any;
	temp: any;
	formId: string;
	getDataList;
	@HostListener('window:beforeunload', ['$event'])
	unloadNotification($event: any) {
		if (localStorage.getItem('currentUser')) {
			if (!this.checked) {
				$event.returnValue = false;
				return false;
			}
		}

		return true;
	}
	constructor(
		private router: Router,
		private translate: TranslateService,
		private route: ActivatedRoute,
		private formDataService: GetDataToResolverService,
		private translationService: TranslationService,
		private apiService: ApiService,
		private location: Location,
		public dialogService: DialogService,
		private _change: ChangeDetectorRef
	) {
		if (this.route.snapshot.params.id) {
			this.buttonTitle = "Update Form";
		}
	}
	async ngOnInit() {
		this.translationService.updateLang.subscribe(res => {
			this.setToolbarInComponentListAndTranslate(res);
		})
		try {
			if (this.route.snapshot.params.id) {
				this.formId = this.route.snapshot.params.id
				this.getDataList = this.apiService.getTypeRequest(`${environment["api_url"]}/getFormSchemaByFormId`, this.formId).subscribe(res => {
					if (res && res['response'].components.length) {
						this.form = res['response'];
					}
					this._change.detectChanges();
				})
			}
		}
		catch (e) { }
	}


	ngAfterViewInit() {
		setTimeout(() => {
			this.selectedView = 'mobile';
			this.changeView();
			this.setToolbarInComponentListAndTranslate(localStorage.getItem('language'));
		})
	}

	setToolbarInComponentListAndTranslate(lang) {
		$('span[id^=builder]').each(function () { // to add title to formio icon (the thing we see when we hover over the icon)
			// console.log(" $(this).text()", $(this).prop('id'));

			// if (lang == 'en') {
			// 	var id = `#${$(this).prop('id')}`;
			// 	var getHtmlOnCurrentId = $(`#${$(this).prop('id')}`).html();
			// 	var getDataToAppand = (getHtmlOnCurrentId.split('</i>'));
			// 	var title = Field_En.basicComponent[`#${$(this).prop('id')}`];
			// 	$(this).attr('title', title);
			// 	$(id).html(`${getDataToAppand[0]}</i>${title}`);
			// } else {
			// 	var id = `#${$(this).prop('id')}`;
			// 	var getHtmlOnCurrentId = $(`#${$(this).prop('id')}`).html();
			// 	var getDataToAppand = (getHtmlOnCurrentId.split('</i>'));
			// 	var title = Field_Hi.basicComponent[`#${$(this).prop('id')}`];
			// 	$(this).attr('title', title);
			// 	$(id).html(`${getDataToAppand[0]}</i>${title}`);
			// }
		});

		$('div[id^=group-panel]').each(function () {
			if (lang == 'en') {
				let title = $(this).prop('id');
				if (Button_En[title.trim()]) {
					$(this).find('button').text(Button_En[title]);
				}
			} else {
				let title = $(this).prop('id');
				if (Button_Hi[title.trim()]) {
					$(this).find('button').text(Button_Hi[title]);
				}
			}
		})
		this.changeComponentList();
	}



	async onChange(event) {
		this.temp = event.form
		// this.translateForm(localStorage.getItem('language'));
		try {
			this.jsonElement.nativeElement.innerHTML = '';
			this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
			this.formDataService.setFormRenderData(JSON.stringify(event.form['components'], null, 4))
			this.formTemplate = JSON.stringify(event.form['components'], null, 4);
		}
		catch (e) {

		}
	}

	canDeactivate(): Observable<boolean> | boolean {
		if (!this.checked) {
			return this.dialogService.confirm('Discard unsaved form?');
		}
		return true;
	}

	async saveForm() {
		localStorage.setItem("event", JSON.stringify(this.formTemplate))
		try {
			this.user = JSON.parse(localStorage.getItem('currentUser'));
			this.checked = true;
			$('.fa-cog').click();
			$('.formio-dialog-overlay').click();
			if (this.buttonTitle != "Save Form") {
				this.editForm();
				return false;
			}
			const newArray = {};
			newArray['forms'] = this.user;
			newArray['formSchema'] = {};
			newArray['formSchema']['components'] = this.temp.components;
			newArray['formSchema']['version'] = environment.apiVersion;
			this.apiService.postTypeRequest(`${environment["api_url"]}/saveForm`, newArray).subscribe(res => {
				if (res) {
					localStorage.removeItem('currentUser')
					this.location.back()
				}
				this._change.detectChanges();
			})

		}
		catch (e) {
		}

	}
	editForm() {
		const newFormArray = {}
		newFormArray['form'] = this.form['form'];
		newFormArray['components'] = {};
		newFormArray['components'] = this.temp.components;
		newFormArray['version'] = environment.apiVersion;
		newFormArray['id'] = this.formId;
		newFormArray['lastUpdationTime'] = 0
		this.apiService.postTypeRequest(`${environment["api_url"]}/editFormSchema`, newFormArray).subscribe(res => {
		})
	}

	reset() {
		this.form = {};
	}

	translateForm(lang) {
		$('label[class^=control-label]').each(function () {
			let title = $(this).text().trim();
			if (lang == 'en') {
				if (Form_En['data'][title]) {
					if ($(this).find('span').text()) {
						$(this).find('span').text(Form_En['data'][title])
					} else {
						$(this).text(Form_En['data'][title])
					}
				}
			} else {
				if (Form_Hi['data'][title]) {
					if ($(this).find('span').text()) {
						$(this).find('span').text(Form_Hi['data'][title])
					} else {
						$(this).text(Form_Hi['data'][title])
					}
				}
			}
		})
	}

	// Change Layout mobile,i-pad,-desktop
	changeView() {
		const formioBuilder = $(".form-io-altered").find(".formarea.drag-container");
		if (this.selectedView == 'mobile') {
			if ($(".form-io-altered").find(".form-io-Ipad").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-mobile col-xs-8 col-sm-9 col-md-10"></div>');
		} else if (this.selectedView == "i-pad") {
			if ($(".form-io-altered").find(".form-io-mobile").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-Ipad col-xs-8 col-sm-9 col-md-10"></div>');
		} else {
			formioBuilder.unwrap();
		}
	}
	// Change formComponent icon or grid
	gridIcon() {
		this.isValue = false;
		$('.formcomponents').removeClass('icon-view');
	}
	icon() {
		this.isValue = true;
		$('.formcomponents').addClass('icon-view');
	}

	formRender() {
		this.router.navigate(["/form-render"])
	}

	changeComponentList() {
		const data = field.basicComponent.filter(e => {
			if (e.show == false) {
				$(e.id).addClass("formcomponentsDisplay");
			}
		})
	}
	ngOnDestroy() {
		this.getDataList.unsubscribe();
	}
}
